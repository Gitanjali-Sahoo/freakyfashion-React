import express from "express";
import Database from "better-sqlite3";

const db = new Database("./db/product-manager.db", {
  verbose: console.log,
});
const cartDB = new Database("./db/cart-manager.db", {
  verbose: console.log,
});
const port = 8000;

const app = express();
app.use(express.json());

// Generate slug
function generateSlug(input) {
  return input
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing whitespace
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .replace(/-+/g, "-"); // Remove consecutive dashes
}

//Get all products from database
app.get("/api/products", (req, res) => {
  const products = db
    .prepare(
      `SELECT
      id,
      name,
      price,
      image,
      sku,
      description,
      gender,
      slug,
      createdAt FROM products
    `
    )
    .all();
  // Get current date for comparing product age
  const currentDate = new Date();

  // Loop through each product and asign the isNew tag to product
  products.forEach((product) => {
    const productCreatedAt = new Date(product.createdAt);
    const timeDifference = currentDate - productCreatedAt;
    const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

    //Check if product publish date is in future then it will not show in the home page
    product.hide = productCreatedAt > currentDate;
    // Check if the product is created within the last 7 days
    product.isNew = daysDifference < 7;
    // Filter out the products that are marked to be hidden
  });
  const visibleProducts = products.filter((product) => !product.hide);
  res.json(visibleProducts);
});

// app.get("/api/products/:id", (req, res) => {
//   const id = req.params.id;

//   const select = db.prepare(`
//  SELECT
//       id,
//       name,
//       price,
//       image,
//       sku,
//       description,
//       gender,
//       slug,
//       createdAt FROM products WHERE id = ?
//     `);
//   const rows = select.get(id);
//   res.json(rows);
// });

// Filter product using query
// app.get("/api/search", (req, res) => {
//   const searchedQuery = req.query.search?.trim() || "";

//   if (!searchedQuery) {
//     return res.json({
//       productsVisible: [],
//       message: "Please enter a search term.",
//     });
//   }
//   const formattedQuery = searchedQuery.replace(/&/g, "%");
//   const select = db.prepare(`
//     SELECT id, name, price, image, sku, description, gender, slug, createdAt
//     FROM products
//     WHERE name LIKE ?  OR LOWER(gender) = LOWER(?)
//   `);

//   const rows = select.all(`%${formattedQuery}%`, searchedQuery);

//   if (!rows.length) {
//     return res.json({
//       productsVisible: [],
//       message: "No products found for your search.",
//     });
//   }

//   const currentDate = new Date();

//   // Loop through each product and assign isNew and hide properties
//   rows.forEach((product) => {
//     const productCreatedAt = new Date(product.createdAt);
//     const daysDifference =
//       (currentDate - productCreatedAt) / (1000 * 60 * 60 * 24);

//     product.isNew = daysDifference < 7;
//     product.hide = productCreatedAt > currentDate;
//   });

//   // Filter products to exclude hidden ones
//   const productsVisible = rows.filter((product) => !product.hide);

//   res.json({
//     productsVisible,
//     message: ` ${productsVisible.length} products found`,
//   });
// });

//delete a product by id from the DB
app.delete("/api/products/:id", (req, res) => {
  const id = req.params.id;
  const select = db.prepare(`
  DELETE FROM products WHERE id = ?
  `);
  const result = select.run(id);
  if (result.changes > 0) {
    console.log("deleted");
    res.json({ message: "Product deleted successfully!" });
  } else {
    res.status(404).json({ message: "Product not found!" });
  }
});

//Add a product into the DB
app.post("/api/products/new", (req, res) => {
  const newProduct = { ...req.body, slug: generateSlug(req.body.name) };

  const insert = db.prepare(`
    INSERT INTO products(
      name,
      price,
      image,
      sku,
      description,
      gender,
      slug,
      createdAt
    ) VALUES (
      @name,
      @price,
      @image,
      @sku,
      @description,
      @gender,
      @slug,
      @date)`);

  try {
    insert.run(newProduct);
    res.status(201).json({ message: "Product added successfully!" });
  } catch (error) {
    console.error("Error inserting product:", error);
    res.status(500).json({ error: "Failed to add product." });
  }
});

// *******************************************************************************************************

//Cart functionality
app.post("/api/cart", (req, res) => {
  const product = req.body;
  console.log(product);
  const insert = cartDB.prepare(`
    INSERT INTO cart(
      name,
      price,
      image,
      sku,
      description,
      gender,
      slug,
      createdAt
    ) VALUES (
      @name,
      @price,
      @image,
      @sku,
      @description,
      @gender,
      @slug,
      @date)`);

  try {
    insert.run(product);
    res.status(201).json({ message: "Product added successfully in Cart!" });
  } catch (error) {
    console.error("Error inserting product:", error);
    res.status(500).json({ error: "Failed to add product in to the Cart." });
  }
});

// get product from Cart DB

app.get("/api/cart", (req, res) => {
  const cartProduct = cartDB
    .prepare(
      `
  SELECT
      id,
      name,
      price,
      image,
      sku,
      description,
      gender,
      slug,
      createdAt,
      quantity FROM cart
  `
    )
    .all();

  res.json(cartProduct);
});
app.put("/api/cart/update", (req, res) => {
  const { id, quantity } = req.body;

  if (!id || quantity < 1) {
    return res.status(400).json({ error: "Invalid product ID or quantity" });
  }

  if (quantity < 1) {
    // Remove the product if quantity is 0
    const deleteItem = cartDB.prepare("DELETE FROM cart WHERE id = ?");
    deleteItem.run(id);
    return res.json({ message: "Product removed from cart!" });
  }

  // Update quantity in database
  const update = cartDB.prepare(`UPDATE cart SET quantity = ? WHERE id = ?`);
  update.run(quantity, id);

  res.json({ message: "Quantity updated successfully!" });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

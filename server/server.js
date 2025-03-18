import express from "express";
import Database from "better-sqlite3";

const db = new Database("./db/product-manager.db", {
  verbose: console.log,
});
const port = 8000;

const app = express();

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

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;

  const select = db.prepare(`
 SELECT
      id,
      name,
      price,
      image,
      sku,
      description,
      gender,
      slug,
      createdAt FROM products WHERE id = ?
    `);
  const rows = select.get(id);
  res.json(rows);
});

// Filter product using query
app.get("/api/search", (req, res) => {
  const searchedQuery = req.query.search?.trim() || "";

  if (!searchedQuery) {
    return res.json({
      productsVisible: [],
      message: "Please enter a search term.",
    });
  }

  const select = db.prepare(`
    SELECT id, name, price, image, sku, description, gender, slug, createdAt
    FROM products
    WHERE name LIKE ? OR LOWER(gender) = LOWER(?)
  `);

  const rows = select.all(`%${searchedQuery}%`, searchedQuery);

  if (!rows.length) {
    return res.json({
      productsVisible: [],
      message: "No products found for your search.",
    });
  }

  const currentDate = new Date();

  // Loop through each product and assign isNew and hide properties
  rows.forEach((product) => {
    const productCreatedAt = new Date(product.createdAt);
    const daysDifference =
      (currentDate - productCreatedAt) / (1000 * 60 * 60 * 24);

    product.isNew = daysDifference < 7;
    product.hide = productCreatedAt > currentDate;
  });

  // Filter products to exclude hidden ones
  const productsVisible = rows.filter((product) => !product.hide);

  res.json({
    productsVisible,
    message: `products found ${productsVisible.length}`,
  });
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});

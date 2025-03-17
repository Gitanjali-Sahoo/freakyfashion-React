CREATE TABLE  products(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price TEXT,
    image TEXT,
    sku TEXT,
    description TEXT,
    gender TEXT,
    slug TEXT UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO products (
    name,
    price,
    image,
    sku,
    description,
    gender,
    slug
) VALUES (
       'Lindex Brown Shoes',
       '399',
       'https://images.pexels.com/photos/27204266/pexels-photo-27204266/free-photo-of-a-woman-s-hand-holding-a-pair-of-black-heels.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
       'ABC123',
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur ipsum suscipit, vestibulum arcu sed, condimentum eros. Sed a enim at tortor congue dapibus at sed eros. Integer accumsan malesuada velit, non tempus eros facilisis sit amet.',
       'Female',
       'lindex-brown-shoes'
);

INSERT INTO products (
    name,
    price,
    image,
    sku,
    description,
    gender,
    slug
) VALUES (
       'H&M Red Shoes',
       '299',
       'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
       'ABC123',
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur ipsum suscipit, vestibulum arcu sed, condimentum eros. Sed a enim at tortor congue dapibus at sed eros. Integer accumsan malesuada velit, non tempus eros facilisis sit amet.',
       'Female',
       'H&M-Red-Shoe'
);

INSERT INTO products (
    name,
    price,
    image,
    sku,
    description,
    gender,
    slug
) VALUES (
       'Stadium Brown Shoes',
       '399',
       'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1200',
       'ADE153',
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur ipsum suscipit, vestibulum arcu sed, condimentum eros. Sed a enim at tortor congue dapibus at sed eros. Integer accumsan malesuada velit, non tempus eros facilisis sit amet.',
       'Male',
       'stadium-brown-shoes'
);
INSERT INTO products (
    name,
    price,
    image,
    sku,
    description,
    gender,
    slug
) VALUES (
       'Puma Blue Shoes',
       '299',
       'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200',
       'ADE123',
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur ipsum suscipit, vestibulum arcu sed, condimentum eros. Sed a enim at tortor congue dapibus at sed eros. Integer accumsan malesuada velit, non tempus eros facilisis sit amet.',
       'Female',
       'puma-blue-shoes'
);

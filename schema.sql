DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products(
	item_id INTEGER AUTO_INCREMENT, 
    product_name VARCHAR(45) NULL, 
    department_name VARCHAR(45) NULL, 
    price DECIMAL(20,2) NULL, 
    stock_quantity INTEGER(20) NULL,
    primary key(item_id)
);

INSERT INTO products
	(product_name, department_name, price, stock_quantity)
VALUES
	("Macbook", "Electronics", 1000.00, 50),
    ("Gaming Mouse", "Electronics", 40.00, 270),
    ("Airpods", "Electronics", 170.00, 120),
    ("Yeti Water Bottle", "Health", 31.00, 20),
    ("42 in LG TV", "Electronics", 300.00, 65),
    ("Queensize Bedframe", "Furtniture", 320.00, 40),
    ("Walnut Drawer", "Furtniture", 120.00, 80),
    ("Birchwood Desk", "Furtniture", 45.00, 650),
    ("Leather Sofa", "Furtniture", 60.00, 35),
    ("Dining Table", "Furtniture", 200.00, 60);
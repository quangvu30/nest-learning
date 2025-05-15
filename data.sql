-- USERS table
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- PRODUCTS table
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  price DECIMAL(10, 2),
  stock INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- ORDERS table
CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  quantity INT,
  order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Insert sample users
INSERT INTO users (name, email) VALUES
('Alice', 'alice@example.com'),
('Bob', 'bob@example.com');

-- Insert sample products
INSERT INTO products (name, price, stock) VALUES
('Laptop', 1200.00, 10),
('Smartphone', 800.00, 25),
('Headphones', 150.00, 50);

-- Insert sample orders
INSERT INTO orders (user_id, product_id, quantity) VALUES
(1, 1, 1),  -- Alice buys 1 Laptop
(1, 3, 2),  -- Alice buys 2 Headphones
(2, 2, 1);  -- Bob buys 1 Smartphone

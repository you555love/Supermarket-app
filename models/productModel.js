const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'supermarket_db'
}).promise();

const Product = {
    getAll: () => db.query("SELECT * FROM products ORDER BY created_at DESC"),
    getById: (id) => db.query("SELECT * FROM products WHERE id = ?", [id]),
    create: (data) => db.query("INSERT INTO products SET ?", [data]),
    update: (id, data) => db.query("UPDATE products SET ? WHERE id = ?", [data, id]),
    delete: (id) => db.query("DELETE FROM products WHERE id = ?", [id])
};

module.exports = Product;

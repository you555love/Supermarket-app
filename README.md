# Supermarket-app

## ขั้นตอนการติดตั้งและใช้โปรแกรม

### การเตรียมDatabase (MAMP / MySQL)
1. เปิด **phpMyAdmin** 
2. สร้างฐานข้อมูลชื่อ `supermarket_db`
3. รันคำสั่ง SQL ต่อไปนี้เพื่อสร้างตารางสินค้า: 

```sql
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### เปิด Terminal ในโฟลเดอร์ supermarket-app 

2. ใช้คำสั่งเพื่อติดตั้ง dependency : npm install
3. รันคำสั่ง nodemon app.js เพื่อให้ตัวโปรแกรมทำงาน
4. เปิด http://localhost:3000 สามารถใช้งานโปรแกรมได้เลย

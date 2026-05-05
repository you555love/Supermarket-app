const Product = require('../models/productModel');
const fs = require('fs');
const path = require('path');

exports.getIndex = async (req, res) => {
    const [rows] = await Product.getAll();
    res.render('index', { products: rows });
};

exports.getAddProduct = (req, res) => {
    res.render('add');
};

exports.postAddProduct = async (req, res) => {
    const { name, category, price, stock } = req.body;
    const image = req.file ? req.file.filename : null;
    await Product.create({ name, category, price, stock, image });
    res.redirect('/');
};

exports.getEditProduct = async (req, res) => {
    const { id } = req.params;
    const [rows] = await Product.getById(id); // ดึงข้อมูลสินค้าตาม ID
    
    if (rows.length > 0) {
        res.render('edit', { product: rows[0] }); // ส่งข้อมูลสินค้าตัวแรกไปที่หน้า edit.ejs
    } else {
        res.redirect('/');
    }
};

exports.postEditProduct = async (req, res) => {
    const { id } = req.params;
    const { name, category, price, stock } = req.body;
    
    // ดึงข้อมูลสินค้าเดิมมาดูชื่อไฟล์รูปเก่า
    const [rows] = await Product.getById(id);
    let oldImage = rows[0].image;
    
    // ตรวจสอบว่ามีการอัปโหลดรูปใหม่เข้ามาไหม
    const newImage = req.file ? req.file.filename : oldImage;

    // หากมีการอัปโหลดรูปภาพใหม่ ต้องลบไฟล์รูปภาพเก่าออกจากเซิร์ฟเวอร์
    if (req.file && oldImage) {
        const oldImagePath = path.join(__dirname, '../public/uploads/', oldImage);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath); 
        }
    }

    // อัปเดตข้อมูลลงฐานข้อมูล
    await Product.update(id, { 
        name, 
        category, 
        price, 
        stock, 
        image: newImage 
    });

    res.redirect('/'); 
};

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    const [rows] = await Product.getById(id);
    if (rows[0].image) {
        fs.unlinkSync(path.join(__dirname, '../public/uploads/', rows[0].image));
    }
    await Product.delete(id);
    res.redirect('/');
};

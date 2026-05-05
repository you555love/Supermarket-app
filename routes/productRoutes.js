const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public/uploads'),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.get('/', controller.getIndex);
router.get('/add', controller.getAddProduct);
router.get('/edit/:id', controller.getEditProduct);
router.post('/add', upload.single('image'), controller.postAddProduct);
router.post('/delete/:id', controller.deleteProduct);
router.post('/edit/:id', upload.single('image'), controller.postEditProduct);
module.exports = router;

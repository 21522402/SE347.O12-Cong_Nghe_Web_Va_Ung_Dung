const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticationMiddleware = require('../middlewares/authenticationMiddleware');

// Public routes
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

// Protected route (requires authentication)
router.post('/products', authenticationMiddleware, productController.createProduct);

module.exports = router;

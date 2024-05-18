const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);
router.get('/liked/:productId', productController.saveLikedProduct);
router.get('/liked', productController.fetchLikedProducts);
router.delete('/liked/:productId', productController.deleteLikedProduct);
// router.get('/:productId', productController.getProductById);
//router.get('/liked/:productId', productController.likedProduct);
module.exports = router;

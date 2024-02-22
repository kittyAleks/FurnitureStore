const PRODUCTS = require('../models/Products');
const PRODUCT_ID = require('../models/ProductId');
const getProducts = async (req, res) => {
  try {
    const products = await PRODUCTS.find({});
    res.status(200).json({products});
  } catch (error) {
    res.status(500).json({message: 'Error during getting products!'});
  }
};
const getProductById = async (req, res) => {
  try {
    const product = await PRODUCTS.findById(req.params.productId);
    const productID = await PRODUCT_ID.findOne({
      productId: req.params.productId,
    });
    // Create new productID
    if (!productID) {
      const newProductId = new PRODUCT_ID({
        productId: req.params.productId,
        variants: [
          {
            color: [],
            size: '',
            quantity: 0,
          },
        ],
      });
      await newProductId.save();
    }

    if (!product || !productID) {
      return res.status(404).json({message: 'Product not found'});
    }

    const response = {
      ...product.toObject(),
      variants: productID.variants,
    };
    res.json(response);
  } catch (error) {
    console.error('Error in getProductById:', error);
    res.status(500).json({message: 'Error retrieving product by id'});
  }
};

module.exports = {getProducts, getProductById};

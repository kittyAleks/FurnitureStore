const PRODUCTS = require('../models/Products');
const getProducts = async (req, res) => {
  try {
    const products = await PRODUCTS.find({});
    console.log('products', {products});
    res.status(200).json({products});
  } catch (error) {
    res.status(500).json({message: 'Error during getting products!'});
  }
};
module.exports = {getProducts};

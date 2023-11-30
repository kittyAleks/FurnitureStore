const PRODUCTS = require('../models/Products');
const getProducts = async (req, res) => {
  try {
    const products = await PRODUCTS.find({});
    res.status(200).json({products});
  } catch (error) {
    res.status(500).json({message: 'Error during getting products!'});
  }
};
module.exports = {getProducts};

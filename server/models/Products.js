const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;

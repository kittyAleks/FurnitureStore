const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;

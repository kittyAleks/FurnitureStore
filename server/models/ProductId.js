const mongoose = require('mongoose');
const {Schema} = mongoose;

const productIdSchema = new Schema({
  productId: {type: Schema.Types.ObjectId, ref: 'Products'},
  variants: [
    {
      color: [String],
      size: String,
      quantity: Number,
    },
  ],
});

const ProductId = mongoose.model('ProductId', productIdSchema);

module.exports = ProductId;

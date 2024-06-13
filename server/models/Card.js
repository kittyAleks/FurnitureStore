const mongoose = require('mongoose');
const {Schema} = mongoose;

const CardSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  last4: {
    type: String,
    required: true,
  },
  expMonth: {
    type: Number,
    required: true,
  },
  expYear: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Card = mongoose.model('Card', CardSchema);
module.exports = Card;

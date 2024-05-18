const mongoose = require('mongoose');
const {Schema} = mongoose;
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedProducts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Products',
    },
  ],
});

const User = mongoose.model('User', userSchema);

module.exports = User;

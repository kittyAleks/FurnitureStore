const mongoose = require('mongoose');

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
  // Другие поля, если они есть
});

const User = mongoose.model('User', userSchema);

module.exports = User;

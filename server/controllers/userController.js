const USER = require('../models/Users');

const register = async (req, res) => {
  console.log('req_body', req.body);
  try {
    const {email, password} = req.body;

    const existingUser = await USER.findOne({email: email});
    if (existingUser) {
      // Вернуть ошибку или сообщение, что пользователь уже существует
      return res.status(400).json({message: 'User already exists!'});
    }
    // Create new user
    await USER.create({email, password});
    res.status(200).json({message: 'User created!'});
  } catch (error) {
    res.status(500).json({message: 'Error during registration!'});
    console.log('error', error);
  }
};

module.exports = {register};

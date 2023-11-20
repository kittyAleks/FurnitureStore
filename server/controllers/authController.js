const USER = require('../models/Auth');
const {hashPassword, checkPassword} = require('../utils/passwordUtils');
const {generateToken} = require('../utils/generateToken');

const register = async (req, res) => {
  try {
    const {email, password} = req.body;
    const existingUser = await USER.findOne({email});
    if (existingUser) {
      return res.status(400).json({message: 'User already exists!'});
    }
    const hashPass = await hashPassword(password);
    // Create new user
    await USER.create({email, password: hashPass});
    res.status(200).json({message: 'User created!'});
  } catch (error) {
    res.status(500).json({message: 'Error during registration!'});
  }
};
const login = async (req, res) => {
  const {email, password} = req.body;
  // Find user in DB by email
  const user = await USER.findOne({email});
  console.log('user', user);
  const token = generateToken(user);

  const isMatch = await checkPassword(password, user.password);
  if (!isMatch) {
    return res
      .status(400)
      .json({message: 'Wrong password! Please, try again!'});
  } else {
    res.status(200).json({message: 'User logged in!', token});
  }
};

module.exports = {register, login};

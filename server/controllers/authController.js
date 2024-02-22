const USER = require('../models/Auth');
const {hashPassword, checkPassword} = require('../utils/passwordUtils');
const {generateToken} = require('../utils/generateToken');
const {verifyRefreshToken} = require('../utils/verifyRefreshToken');
const jwt = require('jsonwebtoken');

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
  try {
    const {email, password} = req.body;

    // Find user in DB by email
    const user = await USER.findOne({email});
    if (!user) {
      return res
        .status(400)
        .json({message: 'User not found. Please register!'});
    }

    const isMatch = await checkPassword(password, user.password);
    if (!isMatch) {
      return res
        .status(400)
        .json({message: 'Wrong password! Please, try again!'});
    }

    const {accessToken, refreshToken} = generateToken(user);
    return res
      .status(200)
      .json({message: 'Login successful!', accessToken, refreshToken});
  } catch (error) {
    console.error('Server error:', error);
    return res
      .status(500)
      .json({message: 'Server error. Please try again later.'});
  }
};
const token = async (req, res) => {
  try {
    const {refreshToken} = req.body;
    if (!refreshToken) {
      return res.status(401).json({message: 'Refresh Token is required'});
    }
    const userData = verifyRefreshToken(refreshToken);
    if (!userData) {
      return res.status(403).json({message: 'Invalid refresh token'});
    }
    const newAccessToken = jwt.sign(
      {id: userData._id},
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '15m'},
    );
    res.json({accessToken: newAccessToken});
  } catch (error) {
    console.error('Server error:', error);
    return res
      .status(500)
      .json({message: 'Server error. Please try again later.'});
  }
};

module.exports = {register, login, token};

const CARD = require('../models/Card');
const jwt = require('jsonwebtoken');

const addCard = async (req, res) => {
  try {
    const {token, last4, expMonth, expYear, brand} = req.body;
    const authorizationHeader = req.headers.authorization;
    const tokenAuth = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(tokenAuth, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.id;
    const newCard = new CARD({
      token,
      last4,
      expMonth,
      expYear,
      brand,
      userId,
    });

    await newCard.save();
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};
const fetchCards = async (req, res) => {
  try {
    const authorizationHeader = req.headers.authorization;
    const tokenAuth = authorizationHeader.split(' ')[1];
    const decoded = jwt.verify(tokenAuth, process.env.ACCESS_TOKEN_SECRET);
    const userId = decoded.id;
    const cards = await CARD.find({userId});
    res.status(200).json(cards);
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = {
  addCard,
  fetchCards,
};

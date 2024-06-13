const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.post('/add', cardController.addCard);
router.get('/fetch', cardController.fetchCards);

module.exports = router;

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => console.log('Mongodb Connected!'))
  .catch(err => console.log('Mongodb Error', err));

app.use(express.json()); // Middleware для парсинга JSON.

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

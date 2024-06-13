const express = require('express');
require('dotenv').config();

const app = express();
const mongoose = require('mongoose');
const Routes = require('./routes/authRoutes');
const ProductRoutes = require('./routes/productRoutes');
const cardsRoutes = require('./routes/cardsRoutes');

mongoose
  // .connect(
  //   'mongodb+srv://ArziAleks:Qwerty18071807@furniturestoredb.wprqbgd.mongodb.net/MyAppDB',
  // )
  .connect('mongodb://localhost:27017/MyAppDB')
  .then(() => console.log('Mongodb Connected!'))
  .catch(err => console.log('Mongodb Error', err));

app.use(express.json()); // Middleware для парсинга JSON.

app.use('/users', Routes);
app.use('/products', ProductRoutes);
app.use('/cards', cardsRoutes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

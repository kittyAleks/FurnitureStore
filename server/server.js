const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Routes = require('./routes/userRoutes');
mongoose
  .connect('mongodb://localhost:27017/MyAppDB')
  .then(() => console.log('Mongodb Connected!'))
  .catch(err => console.log('Mongodb Error', err));

app.use(express.json()); // Middleware для парсинга JSON.
app.use('/users', Routes);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

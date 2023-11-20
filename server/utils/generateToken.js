const jwt = require('jsonwebtoken');

const generateToken = user => {
  console.log('generateTokenuser', user);
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    'secret',
    {expiresIn: '1h'},
  );
};
module.exports = {generateToken};

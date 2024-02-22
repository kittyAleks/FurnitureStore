const jwt = require('jsonwebtoken');

const generateToken = user => {
  const accessToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {expiresIn: '15m'},
  );
  const refreshToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {expiresIn: '7d'},
  );
  return {accessToken, refreshToken};
};
module.exports = {generateToken};

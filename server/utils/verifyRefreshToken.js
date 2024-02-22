const jwt = require('jsonwebtoken');
const verifyRefreshToken = refreshToken => {
  try {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
  } catch (error) {
    return null;
  }
};
module.exports = {verifyRefreshToken};

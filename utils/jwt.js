const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(userId, email) {
  const payload = { email, userId }; // ✅ تصحيح التهجئة
  const secret = process.env.JWT_SECRET;
  const options = { expiresIn: '1h' }; // ✅ تصحيح المفتاح

  const token = jwt.sign(payload, secret, options);
  return token;
}

module.exports = { generateToken };

const jwt = require('jsonwebtoken')
require('dotenv').config()
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader?.split(' ')[1]
  if (!token) {
    return res.status(401).json({ message: 'Token messing' })
  }
  const secret = process.env.JWT_SECRET
  jwt.verify(token, secret, (err, userData) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' })
    }
    req.user = userData
    next()
  })
}
module.exports = { authenticateToken }

const express = require('express')
const router = express.Router()
const { signup, getProfile } = require('../controllers/user.controller')
const { authenticateToken } = require('../middlewares/auth.middleware')
router.post('/signup', signup)
router.get('/profile', authenticateToken, getProfile)
module.exports = router

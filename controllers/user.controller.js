const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt');

async function signup(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).json({ message: 'All fields are required.' });

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: 'User already exists.' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    const token = generateToken(newUser._id, newUser.email);

    res.status(201).json({
      message: 'Signup successful!',
      token
    });

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong.', error: err.message });
  }
}

async function getProfile(req, res) {
  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ message: 'Your profile info:', user });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' });
  }
}

module.exports = { signup, getProfile };

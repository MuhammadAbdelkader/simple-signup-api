const express = require('express')

const postRoutes = require('./routes/user.routes')
const router = require('./routes/user.routes')
const app = express()

app.use(express.json())
app.use('/', router)
module.exports = app

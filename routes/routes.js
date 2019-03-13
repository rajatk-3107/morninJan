const express = require('express')
const router = express.Router();

const register = require('./register')
router.post('/register', register)

const login = require('./login')
router.post('/login', login)

module.exports = router;
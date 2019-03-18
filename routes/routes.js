const express = require('express')
const router = express.Router();
const tokenVerify = require('./tokenVerify')

const register = require('./register')
router.post('/register', register)

const login = require('./login')
router.post('/login', login)

const createTodo = require('./createTodo')
router.post('/create',tokenVerify, createTodo)

const fetchTodo = require('./fetchTodo')
router.get('/fetchData', tokenVerify, fetchTodo)

module.exports = router;
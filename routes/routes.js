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

const updateTodo = require('./updateTodo')
router.post('/updateTodo', tokenVerify, updateTodo)

const deleteTodo = require('./deleteTodo')
router.post('/deleteTodo', tokenVerify, deleteTodo)

module.exports = router;
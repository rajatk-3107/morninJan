const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todo = new Schema({
    todo: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    status: Number,
    createdBy: String
})

module.exports = mongoose.model('todo', todo)
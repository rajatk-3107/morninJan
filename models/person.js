const mongoose = require('mongoose')

const person = new mongoose.Schema({
    name: String,
    age: Number,
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = mongoose.model('person', person)
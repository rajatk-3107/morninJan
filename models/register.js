const mongoose = require('mongoose')

const register = new mongoose.Schema({
    name: String,
    phone: {
        type:Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique:true
   },
   createdAt:{
       type: Date,
       default: new Date()
   },
   password: String
})

module.exports= mongoose.model('register', register)
const dbLogin = require('../models/register')
const jwt = require('jsonwebtoken')

module.exports = (req,res) => {
    if(!req.body.password || !req.body.email){
        res.json({
            success: false,
            msg: "Please provide all details."
        })
    }else{
        dbLogin.findOne({email: req.body.email}, (err, loginData)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Server Error. Please try again after some time."
                })
            }else if(!loginData){
                res.json({
                    success: false,
                    msg: "Please register first."
                })
            }else if(req.body.password == loginData.password){
                var token = jwt.sign({name:loginData.name, email: loginData.email}, 'qwerty')
                res.json({
                    success: true,
                    msg: "Login successfull",
                    token: token
                })
            }else{
                res.json({
                    success: false,
                    msg: "Incorrect password."
                })
            }
        })
    }
}
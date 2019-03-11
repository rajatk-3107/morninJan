const express = require('express')
const router = express.Router();

const dbRegister = require('../models/register')
router.post('/register', (req,res)=>{
    if(!req.body.name||!req.body.email||!req.body.phone||!req.body.password){
        res.json({
            success: false,
            msg: "Please provide all details"
        })
    }else{
        new dbRegister({
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            password: req.body.password
        }).save((err, savedData)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Error in saving data"
                })
            }else{
                res.json({
                    success: true,
                    msg: "User registered"
                })
            }
        })
    }
    
})


module.exports = router;
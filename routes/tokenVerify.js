const jwt = require('jsonwebtoken')

module.exports = (req,res,next)=>{
    if(!req.headers.token){
        res.json({
            success: false,
            msg: "Unauthorized request"
        })
    }else{
        jwt.verify(req.headers.token, 'qwerty', (err, decoded)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Invalid user"
                })
            }else{
                req.decoded =decoded;
                next();
            }
        })
    }
}
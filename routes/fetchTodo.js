const dbTodo = require('../models/todo')

module.exports = (req,res)=>{
    dbTodo.find({createdBy: req.decoded.email, status: {$ne: -1}}, (err, data)=>{
        if(err){
            res.json({
                success: false,
                msg: "Something went wrong."
            })
        }else{
            res.json({
                success: true,
                data: data
            })
        }
    })
}
const dbTodo = require('../models/todo')

module.exports= (req,res) => {
    console.log(req.decoded)
    if(!req.body.todo){
        res.json({
            success: false,
            msg: "Please enter all details and try again."
        })
    }else{
        new dbTodo({
            todo: req.body.todo,
            status: 1,
            createdBy: req.decoded.email
        }).save((err, saved)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Please try again after some time."
                })
            }else{
                res.json({
                    success: true,
                    msg: "New todo created."
                })
            }
        })
    }
}
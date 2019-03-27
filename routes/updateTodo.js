const dbTodo = require('../models/todo')

module.exports = (req,res) => {
    if(!req.body.todoId || !req.body.todo){
        res.json({
            success: false,
            msg: "Please provide all details."
        })
    }else{
        dbTodo.findOneAndUpdate({_id: req.body.todoId}, {$set: {todo: req.body.todo}}, (err,data)=>{
            if(err){
                res.json({
                    success: false,
                    msg: "Server error. Please try again after some time."
                })
            }else{
                res.json({
                    success: true,
                    msg: "Data Updated."
                })
            }
        })
    }
}
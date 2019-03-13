const express= require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
//mongodb+srv://rajat:<password>@cluster0-dvak9.mongodb.net/test?retryWrites=true
mongoose.connect('mongodb://rajat:Qwerty123@ds163825.mlab.com:63825/mlab1',(err)=>{ //mongodb::/localhost/database_name
    if(err){
        console.log("Error in database connection", err)
    }else{
        console.log("Database connected")
    }
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


const routes = require('./routes/routes')
app.use('/api', routes)


// const dbPerson = require('./models/person')
// new dbPerson({
//     name: "Abc",
//     email: 'abc.abc@gmail.com',
//     phone: 7894561230
// }).save((err, data)=>{
//     if(err){
//         console.log("Error",err)
//     }else{
//         console.log(data)
//     }
// })

// app.post('/first', (req,res)=>{
//     console.log(req.body)
//     console.log("API hit")
//     console.log("I")
//     console.log(req.headers);
//     res.json({
//         success: true,
//         msg :req.headers
//     })
// })



app.listen(4000,()=>{
    console.log("Server started at port 4000")
})
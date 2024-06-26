const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const todoModel =require('./Models/todo')

require('dotenv').config()
const app = express()
app.use(cors())
// cors is used to allow cross origin resource sharing
app.use(express.json())
db_url= process.env.db_url
// console.log("bbbhbj hjbm",db_url)
mongoose.connect(db_url)

app.get ('/get',(req,res)=>{
    todoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

)
app.put('/update/:id', (req,res) =>{
    const {id} = req.params;
   todoModel.findByIdAndUpdate({_id: id}, {done: true})
   .then(result=> res.json(result))
   .catch(err=> res.json(err))
})
app.delete('/delete/:id',(req,res) => {
const {id} =req.params;
todoModel.findByIdAndDelete({_id: id})
.then(result=> res.json(result))
.catch(err=> res.json(err))
} )

app.post('/add',(req,res) =>{
    const task =req.body.task;
    todoModel.create({
        task :task
    }).then(reault=> res.json(result))
    .catch(err => res.json(err ))
})
app.listen(3001,() =>{
   console.log ("Server is Running")
}
)
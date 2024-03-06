const mongoose =require('mongoose')
const todoScheme = new mongoose .Schema({
    task : String
})


const todoModel = mongoose.model("todos",todoSchema)
module.exports= todoModel
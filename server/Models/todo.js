const mongoose =require('mongoose')
const todoSchema = new mongoose .Schema({
    task : String,
    done:{
        type:Boolean
    }
})


const todoModel = mongoose.model("todos",todoSchema)
module.exports= todoModel
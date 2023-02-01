const mongoose=require('mongoose')
const {Schema}=mongoose

const TodoSchema=new Schema({
    text: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
    
})
const Todo = mongoose.model('Todo', TodoSchema);

module.exports=Todo
//PUSG4NUUPPFtfObO
//mongodb+srv://Aromal2059:PUSG4NUUPPFtfObO@cluster0.olkzeld.mongodb.net/?retryWrites=true&w=majority
const mongoose = require('mongoose');

const costumerSchema = new mongoose.Schema({
    costumerId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
} , 
{
    timestamps:true
}
)


module.exports = mongoose.model('Costumer' , costumerSchema);
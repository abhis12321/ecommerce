const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    categoryId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Category',
    },
    title: {
        type:Number,
        required:true,
    },
    availability:{
        type:Number,
        required:true,
        default:0,
    },
    price:{
        type:Number,
        required:true, 
        default:0,       
    },
    description:{
        type:String,
    }
} , 
{
    timestamps:true
}
)


module.exports = mongoose.model('Product' , productSchema);
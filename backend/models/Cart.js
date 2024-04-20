const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Category',
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Product',
    },
    itemCount: {
        type:Number,
        required:true,
        default:0,
    },
} , 
{
    timestamps:true
}
)


module.exports = mongoose.model('Cart' , cartSchema);
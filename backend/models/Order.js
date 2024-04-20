const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    productId:{
        type:mongoose.Schema.ObjectId,
        required:true,
        ref:'Product',
    },
    itemCount: {
        type:Number,
        required:true,
    },
    price:{
        type:Number,
        required:true,   
        default:0,     
    }
} , 
{
    timestamps:true
}
)


module.exports = mongoose.model('Order' , orderSchema);
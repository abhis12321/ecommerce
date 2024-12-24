import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const cart_schema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "product id is missing."],
    },  
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "user id is missing."],
    },  
    product_quantity:{
        type:Number,
        required:[true , "product quantity is missing."],
    },
})


export const CartItem = mongoose.models.Cart || mongoose.model("Cart" , cart_schema);
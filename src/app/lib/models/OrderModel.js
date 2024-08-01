import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const order_schema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "product_id is missing."],
    },    
    brand_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "brand_id is missing."],
    },
    product_count:{
        type:Number,
        required:[true , "product count is missing."],
    },
    order_price:{
        type:Number,
        required:[true , "product price is missing."],
    },
    payment_status:{
        type:String,
        enum: {
            values:[
                "online",
                "cash-on-delivery",
            ],
            message:"Invalid value, Please select a correct payment method"
        },
        required:[true , "Invalid request"],
    },
    order_status:{
        type:String,
        enum: {
            values:[
                "cancelled",
                "failed",
                "placed",
                "delivered",
            ],
            message:"Bad request."
        },
        required:[true , "Invalid request"],
    },
    ordered_at: {
        type:Date,
        default:Date.now,
    },
})


export const Order = mongoose.models.Order || mongoose.model("Order" , order_schema);
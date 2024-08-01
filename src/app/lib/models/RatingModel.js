import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const rating_schema = new mongoose.Schema({
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "product-id is missing."]
    },
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , "user-id is missing."]
    },
    rating:{
        type:Number,
        required:[true , "rating-starts are missing."]
    },
    review:{
        type:String,
    },
    imgUrl:{
        type:String,
    },
    rated_at:{
        type:Date,
        default:Date.now,
    },
});


export const Rating = mongoose.models.Rating || mongoose.model("Rating" , rating_schema);
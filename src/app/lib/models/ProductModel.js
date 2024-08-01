import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const product_Schema = new mongoose.Schema({
    product_name:{
        type:String,
        required:[true , 'data missing, Please enter product name'],
    },
    product_category:{
        type:String,
        required:[true , 'data missing, Please enter product category'],
        enum: {
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports",
                "Garments",
            ],
            message:"Invalid value, Please select correct category"
        }
    },
    // brand_id:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:[true , 'data missing, Please enter product brand name'],
    // },
    seller_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:[true , 'data missing, Please enter product seller'],
    },
    price:{
        type:Number,
        required:[true , 'data missing, Please enter product price'],
    },
    discount:{
        type:Number,
        default:0,
    },
    product_description:{
        type:String,
        required:[true , 'data missing, Please enter product decription'],
    },
    img_url: {
        type:String,
        default:'',
    },
    available_stock:{
        type:Number,
        required:[true , 'data missing, Please enter product available stock'],
    },
    is_verified:{
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default:Date.now,
    }
});

export const Product = mongoose.models.Products || mongoose.model('Products' , product_Schema);
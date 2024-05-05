import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();

const product_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Please enter product name'],
    },
    description:{
        type:String,
        required:[true , 'Please enter product decription'],
    },
    price:{
        type:Number,
        required:[true , 'Please enter product price'],
    },
    images:[{
        public_id:{
            type:String,
        },
        url:{
            type:String,
        },
    }],
    category:{
        type:String,
        required:[true , 'Please enter product category'],
        enum: {
            values:[
                "Electronics",
                "Cameras",
                "Laptops",
                "Accessories",
                "Headphones",
                "Sports",
            ],
            message:"Please select correct category"
        }
    },
    seller:{
        type:String,
        required:[true , 'Please enter product seller'],
    },
    stock:{
        type:Number,
        required:[true , 'Please enter product stock'],
    },
    ratings:{
        type:Number,
        default:0,
    },
    ratingsCount: {
        type:Number,
        default:0,
    }
});

export default mongoose.models.Product || mongoose.model('Products' , product_Schema);
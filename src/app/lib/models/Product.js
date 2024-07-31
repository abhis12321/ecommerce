import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();

const product_Schema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true , 'data missing, Please enter product name'],
    },
    category:{
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
    // brandId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     required:[true , 'data missing, Please enter product brand name'],
    // },
    sellerId:{
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
    description:{
        type:String,
        required:[true , 'data missing, Please enter product decription'],
    },
    imgUrl: {
        type:String,
        default:'',
    },
    availableStock:{
        type:Number,
        required:[true , 'data missing, Please enter product available stock'],
    },
});

export default mongoose.models.Products || mongoose.model('Products' , product_Schema);
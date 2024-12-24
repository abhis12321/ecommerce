import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const product_Schema = new mongoose.Schema({
    product_title: {
        type: String,
        required: [true, 'data missing, Please enter product name'],
    },
    product_category: {
        type: String,
        required: [true, 'data missing, Please enter product category'],
        // enum: {
        //     values: [
        //         "Electronics",
        //         "Cameras",
        //         "Laptops",
        //         "Accessories",
        //         "Headphones",
        //         "Sports",
        //         "Garments",
        //     ],
        //     message: "Invalid value, Please select correct category"
        // }
    },
    product_description: {
        type: String,
        required: [true, 'data missing, Please enter product decription'],
    },
    price: {
        type: Number,
        required: [true, 'data missing, Please enter product price'],
    },
    discountPercentage: {
        type: Number,
        default: 0,
    },
    images: {
        type: [String],
        required: [true, 'data missing, Please choose some product images'],
    },
    thumbnail_img: {
        type:String,
    },
    available_stock: {
        type: Number,
        required: [true, 'data missing, Please enter product available stock'],
    },
    product_tags: {
        type:[String],
    },
    product_brand: {
        type:String,
    },
    product_warrantyInformation: {
        type:String,
        required:[true , "some data missing"]
    },
    product_shippingInformation: {
        type:String,
        required:[true , "some data missing"]
    },
    product_returnPolicy: {
        type:String,
        required:[true , "some data missing"]
    },
    is_verified: {
        type: Boolean,
        default: false,
    },
    seller_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    created_at: {
        type: Date,
        default: Date.now,
    }
});

export const Product = mongoose.models.Products || mongoose.model('Products', product_Schema);
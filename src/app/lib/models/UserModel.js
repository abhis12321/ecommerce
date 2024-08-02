import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const userSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:[true , 'data missing, Please enter your name'],
    },
    user_gender:{
        type:String,
        required:[true , 'data missing, Please enter your gender'],
        enum: {
            values:[
                "male",
                "female",
                "others",
            ],
            message:"Invalid value, Please select a correct gender"
        }
    },
    user_address: {
        type:String,
        required:[true , "data missing, Please enter your address"],        
    },
    country_code:{
        type:String,
        default:"+91",
    },
    mobile_no:{
        type:String,
        unique:[true , "A user with the same mobile number is already registered."],
        required:[true , "data missing, Please enter your mobile number"],
        minlength:[10 , "Mobile Number should contain atleast 10 digits"],
        maxlength:[10 , "Mobile Number should contain atmost 10 digits"],
    },
    email:{
        type:String,
        unique:[true , "A user with the same email-id is already registered."],
        required:[true , 'data missing, Please enter your email Id'],
    },
    password:{
        type:String,
        required:[true , 'data missing, Please enter a password'],
    },
    img_url:{
        type:String,
        default:'',
    },
    user_role:{
        type:String,
        required:[true , 'data missing, Please select a user role'],
        enum: {
            values:[
                "customer",
                "seller",
                "brand-admin",
                "admin",
            ],
            message:"Invalid value, Please select a correct user role"
        }
    },
    is_verified:{
        type:Boolean,
        default:false,
    },
    created_at:{
        type:Date,
        default:Date.now,
    }
})

export const User = mongoose.models.Users || mongoose.model('Users' , userSchema);
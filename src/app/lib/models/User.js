import mongoose from "mongoose";
import dbConnect from "../config/dbConnect";

dbConnect();
const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:[true , 'data missing, Please enter your name'],
    },
    address: {
        type:String,
        required:[true , "data missing, Please enter your address"],        
    },
    countryCode:{
        type:String,
        default:"+91",
    },
    mobileNo:{
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
    image:{
        type:String,
        default:'',
    },
    role:{
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
    isVerified:{
        type:Boolean,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

export default mongoose.models.Users || mongoose.model('Users' , userSchema);
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true , 'Please enter user name'],
    },
    mobileNo:{
        type:String,
        unique:true,
        required:[true , "Please enter mobile number"],
        minlength:[10 , "Mobile Number should contain atleast 10 digits"],
        maxlength:[10 , "Mobile Number should contain atmost 10 digits"],
    },
    email:{
        type:String,
        unique:true,
        required:[true , 'Please enter email Id'],
    },
    password:{
        type:Number,
        required:[true , 'Please enter password'],
    },
    image:{
        public_id:{
            type:String,
            default:"NA"
        },
        url:{
            type:String,
            default:"/img/profile.png"
        },
    },
    role:{
        type:String,
        required:[true , 'Please enter user role'],
        enum: {
            values:[
                "customer",
                "seller",
                "admin",
            ],
            message:"Please select correct user role"
        }
    },
})

export default mongoose.models.User || mongoose.model('Users' , userSchema);
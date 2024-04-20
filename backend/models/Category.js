const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
} , 
{
    timestamps:true
}
)


module.exports = mongoose.model('Category' , categorySchema);
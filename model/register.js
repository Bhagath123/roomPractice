const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const postSchema = new Schema({
    name:{
        type:String,
        required:true,

    },
    phonenumber:{
        type:Number,
        required:true,

    },
    email:{
        type:String,
        required:true,

    }
});

module.exports=mongoose.model('Post',postSchema)
    
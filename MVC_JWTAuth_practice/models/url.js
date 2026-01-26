const jwt=require('jsonwebtoken')

const mongoose =require('mongoose')

const Users =new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
});

const urlSchema=new mongoose.Schema({
    shortId:{
        type:String,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
    },
    visitHistory:[{timestamp:{type:Number}}],
},{timestamps:true});

const URL=mongoose.model("url",urlSchema);
module.exports=URL;
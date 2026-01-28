const express=require('express');
const app=express();
app.use(express.json()); 
const jwt=require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

async function validateAuth(req,res,next){
    const authHeader=req.headers['authorization'];
    // console.log(authHeader);
    if(!authHeader){
        res.status(400).json({"msg":"AUTH TOKEN IN HEADER NOT AVAILABLE"});
    }

    const token=authHeader.split(" ")[1];
    // console.log(token);
    try{
        const decoded=await jwt.verify(token,process.env.JWT_SECRET);
        req.userId=decoded.userId;
        next();
    }catch(err){
        console.log(err);
        return res.status(401).json({msg:"Invalid TOKEN"});
    }   
}
module.exports={validateAuth};
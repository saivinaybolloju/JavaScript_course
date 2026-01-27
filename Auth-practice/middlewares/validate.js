const express=require('express');
const app=express();
app.use(express.json()); 

function validateSignup(req,res,next){
    if (!req.body) {
        return res.status(400).json({ msg: "Request body missing" });
    }

    const {userName,mail,password}=req.body;
    if(!userName||!mail||!password){
        return res.status(400).json({"msg":"ENTER COMPLETE DETAILS"});
    }
    if (userName.includes(" ")) {
        return res.status(400).json({"msg":"PLEASE ENTER USERNAME WITHOUT SPACE"});
    }

    if(password.length<6){
        return res.status(400).json({"msg":"PASSWORD LENGTH NOT MATCHED"});
    }
    next();
}
function validateSignIn(req,res,next){
    const {mail,password}=req.body;
    if(!mail||!password){
        return res.status(400).json({"msg":"ENTER COMPLETE DETAILS"});
    }
    next();
}


module.exports={
    validateSignIn,
    validateSignup
}
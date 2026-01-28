const express=require('express');
const app=express();
const User = require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const router=express.Router();
const {validateSignup,validateSignIn}=require('../middlewares/validate');
const {validateAuth}=require("../middlewares/auth");
app.use(express.json()); 
const dotenv = require("dotenv");
dotenv.config();

router.post('/signup',validateSignup,async (req,res)=>{
    try{

        const {userName,mail,password}=req.body;
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const useritem=new User({
            userName:userName,
            mail:mail,
            password:hashedPassword,
        });
        await User.create(useritem);
        res.status(201).json({"msg":"USER CREATED"});
    }catch(err){
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
})

router.post('/signin',validateSignIn,async(req,res)=>{
    try{

        const {mail,password}=req.body;
        const useritem=await User.findOne({mail});
        if (!useritem) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    
        const isMatch = await bcrypt.compare(password, useritem.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
    
        const token=await jwt.sign({
            userId:useritem._id},
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
    );
        res.status(200).json({token});
    }catch(err){
        res.status(500).json({ message: "Signin failed", error: err.message });
    }
});


router.get("/profile", validateAuth, async (req, res) => {
    try{
        const userId=req.userId;
        const user = await User.findById(userId).select("-password");
        
        if (!user) {
        return res.status(404).json({ msg: "User not found" });
        }

        res.json({
        userName: user.userName,
        mail: user.mail
        });
    }catch(err){
        res.status(500).json({ msg: "Server error" });
    }
});


module.exports=router;
const express=require('express')
const app=express();
app.use(express.json())
const dotenv = require("dotenv");
dotenv.config();

const mongoose=require('mongoose');

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("Connected Succesfully")})
.catch(()=>{console.log("Error in Connecting DB")});

const userRouter=require('./routes/user');

app.use('/user',userRouter);

app.get("/", (req, res) => {
  res.send("API is running");
});

app.listen(3001,()=>{console.log("Server runnning Successfully")});

const express=require('express')
const app=express();
const urlRoute=require('./routes/url');
const mongoose =require('mongoose')
const URL=require('./models/url')

app.use(express.json());
mongoose.connect("mongodb://127.0.0.1/URLShortener")
.then(()=>console.log("DataBase Connected succesfully"))
.catch(()=>console.log("Database Connectivity Issue"));

app.use('/url',urlRoute);
app.get('/:shortid',async (req,res)=>{
    try{
        const shortId=req.params.shortid;
        const entry=await URL.findOneAndUpdate(
            {shortId},
            {
                $push:{
                    visitHistory:{timestamp:Date.now()},
                },
            },
            {new:true}
        );
        if(!entry) {
            return res.status(500).send("Short URL not found");
        }
        return res.redirect(entry.redirectURL);
    }catch(err){
        console.log(err);
        return res.status(404).send("Internal Server Error");
    }
})

app.listen(3001,()=>{console.log("Server Started at PORT 3001")});


  

const express=require('express')
const {handleGenerateShortUrl,handleGetAnalytics}=require('../controllers/url');

const router=express.Router();

router.post('/',async (req,res)=>{
    await handleGenerateShortUrl(req,res);
})

router.get('/analytics/:shortId',handleGetAnalytics);


module.exports=router;
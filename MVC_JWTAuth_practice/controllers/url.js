const shortId=require('shortid');
const URL=require('../models/url');

async function handleGenerateShortUrl(req,res){
    const body=req.body;
    if(!body||!body.URL){
        return res.status(400).send("URL IS REQUIRED");
    }
     const shortID=shortId();
     const urlitem=await URL.create({
        shortId:shortID,
        redirectURL:body.URL,
        visitHistory:[],
     });
     return res.status(201).json({id:shortID});
}

async function handleGetAnalytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({totalClicks:result.visitHistory.length,
        analytics:result.visitHistory,
    })
}
module.exports={
    handleGenerateShortUrl,
    handleGetAnalytics
};
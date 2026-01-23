const express=require('express');
const app=express();

// const myPromise=new Promise((resolve,reject)=>{
//     const a=5;
//     const b=5;
//     if(a==b){
//         resolve("Done");
//     }else{
//         reject("NOt Done");
//     }

// }).then((msg)=>{console.log("DONE"+msg)}).catch(()=>{console.log("NOT DONE")});

function placeOrder(drink){
    return new Promise((resolve,reject)=>{
        if(drink==="coffee"){
            resolve(`Placed ${drink} Order`);
        }else{
            reject("Item not Available");
        }
    })
}

function processServeOrder(order){
    return new Promise((resolve)=>{
        resolve(`${order} is served`);
    })
}

async function serveOrder(){
    try{
        let orderPlaced= await placeOrder("soup");
        console.log(orderPlaced);
        let orderServed=await processServeOrder(orderPlaced);
        console.log(orderServed);
    }catch(error){
        console.log(error);
    }
}
serveOrder();







app.listen(3000)


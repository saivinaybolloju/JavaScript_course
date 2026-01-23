const express=require('express')
const fs=require('fs')
const app=express();

// SYNCHRONOUS ACCESSING

// const f1=fs.readFileSync('file1.txt');
// const f2=fs.readFileSync('file2.txt');
// app.get('/',(req,res)=>{
//     console.log("Str"+f1);
//     console.log("Str"+f2);
//     res.send("String"+f1);
// })

//ASYNC

fs.readFile("file1.txt",(err,data1)=>{
    if(err) console.log(err.message);
    console.log("F1"+data1);
})

fs.readFile("file2.txt",(err,data2)=>{
    if(err) console.log(err.message);
    console.log("F2"+data2);
})


//serialized async

app.get('/',(req,res)=>{
    fs.readFile("file1.txt",(err,data1)=>{
        if(err) return "ERROR";
        console.log("File 1 Data"+data1);

            fs.readFile("file2.txt",(err,data2)=>{
                if(err) return "ERROR";
                console.log("File 2 Data"+data2);
                res.send("Data is this" +data1+" "+data2);
            })
    })
    
})





app.listen(3000)

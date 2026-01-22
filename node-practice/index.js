const express=require('express')

const app=express();
app.use(express.json());

const arr=[
    {id:1,name:'Java'},
    {id:2,name:'Python'},
    {id:3,name:'C++'},

]

app.get('/',(req,res)=>{
    console.log("HELLO WORLD");
    res.send("HELLO WORLD");
});
app.get('/contact/:name',(req,res)=>{
    console.log("Contact");
    res.send(req.params.name);
});
app.get('/contact/',(req,res)=>{
    console.log("Contact");
    res.send(arr);
});
app.post('/contact/',(req,res)=>{
    const {name}=req.body;
    arr.push({id:arr.length+1,name});
    res.send(arr);
});
app.put('/contact/',(req,res)=>{
    const {item}=req.body;
    if (!item) {
        return res.status(400).send({ message: "Name is required" });
    }
    const ct=arr.find(item=>item.name==="Java");
    if(!ct){
        return res.status(400).send("Notfound");
    }
    ct.name=item;
    //arr.push({id:arr.length+1,item});
    res.send(arr);
});


app.listen(3000);

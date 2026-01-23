const express=require('express')
const app=express();
app.use(express.json());
const users=[
    {id:0,username:"",password:""},
]
app.get('/',(req,res)=>{
    res.send(users);
})

const validateUser=(req,res,next)=>{
    if(!req.body.username||!req.body.password){
        return res.status(400).send("UserName||Password Not entered");
    }
    // users.forEach(item=>{
    //     if(item.username==req.body.username){
    //         return res.status(400).send("Already Exists");
    //     }
    // })
    const exists=users.some(item=> item.username===req.body.username);
    if(exists){
        return res.status(400).send("USER ALREADY EXISTS");
    }
    next();
    
}
app.post('/',validateUser,(req,res)=>{
    const {username,password}=req.body;
    users.push({id:users.length+1,username:username,password:password});
    res.send(users);
})
app.get('/',(req,res)=>{
    res.send(users);
})

app.listen(3000);
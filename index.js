
const express=require('express');
const mysql=require('mysql')
const app=express()
app.use(express.json())

const countvowles=(str)=>{
    str=str.toLowerCase()
    const vowles=['a','e','i','o','u']
    let count =0;
    // str.array.forEach(element => {
    //    if( vowles.includes(element) )count++;
    // });
return count;
}
app.get('/vowles',(req,res)=>{
    console.log(req.body)
let string=req.body.a;
let s1=req.body.b;
let cnt=countvowles(string);
res.status(200).send({"count":cnt});

})
const port=3006
const hostname="localhost"
app.listen(port,hostname,()=>{
    console.log("i am listing")
})
//req{name,class}
app.post('',(req,res)=>{
let name=req.name
let email=req.email

let insertuser=()=>{
    let query=`insert into users()values (${name},$)`
}
let getallusers=()=>{
    let query=``
    }
app.get('/getalluser',(req,res)=>{
    let result=getallusers();
    res.status(200).send();
})
res.status(200).send({cnt:"cbt"});
})
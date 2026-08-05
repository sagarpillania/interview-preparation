const express=require("express");
const app=express();

app.use(express.json());


app.listen(3101,()=>{
    console.log("It is Middleware part");
    
})
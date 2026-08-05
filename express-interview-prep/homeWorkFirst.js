// To lock in today's concept, write a small standalone script using Express that implements an In-Memory Student Directory API:

// Create a POST /api/students route that accepts name, age, and grade in req.body. Validate that all fields are present (return 400 if missing).

// Create a GET /api/students route that returns all students, but if a query parameter grade is provided (e.g., /api/students?grade=A), filter students by that grade.

// Create a GET /api/students/:id route that returns a single student or a 404 error if the ID doesn't exist.

// Try writing this code on your machine! When you're ready, paste your code or solution here, or ask any questions you have about req, res, HTTP status codes, or route parameters. Once we're clear, we move to Chapter 2: Middleware Architecture tomorrow!

const express=require("express"); //import
const app=express(); //use express in app server
app.use(express.json()); //to parse the incoming json data 

let students=[
    {id:1,name:"Sagar",age:"28",grade:"A"},
    {id:2,name:"Sumit",age:"25",grade:"B"},
    {id:3,name:"Divyajit",age:"22",grade:"C"}
];
//Create a POST /api/students route that accepts name, age, and grade in req.body. Validate that all fields are present (return 400 if missing).
app.post("/api/students",(req,res)=>{
    const {name,age,grade}=req.body;

    if(!name || !age || !grade){
        return res.status(400).json({error:"Fields are missing"});
    }
    const newStudent={
        id:students.length+1,
        name:name,
        age:age,
        grade:grade
    };
    students.push(newStudent);
    res.status(201).json(newStudent);
})
// Create a GET /api/students route that returns all students, but if a query parameter grade is provided (e.g., /api/students?grade=A), filter students by that grade.

app.get("/api/students",(req,res)=>{
    const queryValue=req.query;
    const result=students.filter(student=>{
        for(key in queryValue){
            let value=queryValue[key];
            if(!student[key] || student[key].toLowerCase() !==value.toLowerCase()){
                return false;
            }
        }
        return true;
    });
    if(result.length===0){
        return res.status(404).json({error:"Not found the queried person"});
    }
    return res.status(200).json(result);
})
// Create a GET /api/students/:id route that returns a single student or a 404 error if the ID doesn't exist.

app.get("/api/students/:id",(req,res)=>{
    const id=Number(req.params.id);
    const ress=students.find(stuId=>stuId.id===id);
    if(!ress){
        return res.status(404).json({error:"Id not found"});
    }
    return res.status(200).json(ress);
})


app.listen(3001,()=>{
    console.log("Server is running and it is home work of day 1");
    
})

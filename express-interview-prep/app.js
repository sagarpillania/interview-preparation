const express=require("express");
const app=express();

app.use(express.json()); // Middleware to parse incoming JSON bodies

app.get('/',(req,res)=>{
    res.status(200).json({message:'Server is at Home and running smoothly'});
})


app.listen(3000,()=>{
    console.log("Express Server is running at 3000");
    
})


//app.listen(PORT,callback); starts the server and binds to port 3000 and keep listening the incoming req. and CB runs only once.
// app.listen() is just a thin wrapper around Node's http.server.listen() method. 
// intialization- node jata hai OS ke pass ki TCP port 3000 ka access dei do. access ke baad port opens and node ek internal event chlata hai 'listening' ka.
// Execution: fr jo Callback hai vo listening ke sath ek baar attach hokr run hota hai and print krdeta h and cb khtm ho jata h.
// Request Comes:- Jab server run ho jata hai app.listen() se toh server enter karta hai Node's event loop and silently waits and jaise hi req. ati hai kisi endpoint ki (e.g., GET http://localhost:3000/api/students) toh node ko ,ilti hai ek http requesta nd fr express run krta hai specific route handler to execute the request.


//Question: "What happens if you try to start two Express apps on the same port, or call app.listen(3000) twice?"
// Ans:- It will throw "address already in use" exception as OS port can only bound to one process at a time. 

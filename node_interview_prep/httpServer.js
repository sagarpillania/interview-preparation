const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(`Incoming req is for the url: ${req.url}`);

    res.writeHead(200,{'content-type':'text/plain'});

    res.end("Hello! you have succesfully reached to server");
    
});

server.listen(3000,()=>{
    console.log("Server is continuously listening on port 3000");
    
})
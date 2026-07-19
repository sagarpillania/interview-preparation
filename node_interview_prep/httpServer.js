const http=require("http");

const server=http.createServer((req,res)=>{
    console.log(`Incoming req is for the url: ${req.url}`);

    res.writeHead(200,{'content-type':'text/plain'});

    if(req.url==='/'){
        res.end("Hello! you have succesfully reached to server and this is home");
    }
    else if(req.url==='/movies'){
        res.end("Hello! you have succesfully reached to server and this is movies");
    }
    else{
        res.end("404 Page not Found..!!");
    }

    
});

server.listen(3000,()=>{
    console.log("Server is continuously listening on port 3000");
    
})


const http=require('http');

const server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.write('<html>');
    res.write('<head><title>Practice Set</title></head>');
    if(req.url==='/'){
        res.write("<h1>Welcome to my Home</h1>");
    }
    if(req.url==='/men'){
        res.write("<h1>Welcome to Men's Page</h1>");
    }
    if(req.url==='/women'){
        res.write("<h1>Welcome to Women's Page</h1>");
    }
    if(req.url==='/kids'){
        res.write("<h1>Welcome to Kid's Page</h1>");
    }
    if(req.url==='/cart'){
        res.write("<h1>Welcome to Cart Checkout</h1>");
    }
    res.write('</html>');
    res.end();
});

server.listen(3000,()=>{
    console.log("Pracice server is running");
    
})
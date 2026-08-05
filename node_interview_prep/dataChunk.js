const http = require('http');
const fs = require('fs');

const userRequestHandler = (req, res) => {
    console.log(req.url, req.method);

    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body>');
        res.write('<h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-details" method="POST">');

        res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male">');

        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"><br><br>');

        res.write('<input type="submit" value="Submit">');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    else if (req.url === '/submit-details' && req.method === 'POST') {

        const body = [];
//req.on() is used to listen for events emitted by the incoming HTTP request (req), because in Node.js the request is a Readable Stream. req.on(eventName, callback); the event you want to listen and the function which runs when event occurs.

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk); //we push all chunks to a body
        });
//when the chunks end then use the body array to concat all chunks into single and then parse it to string 
        req.on('end', () => {
            const fullBody = Buffer.concat(body).toString();
            // console.log(fullBody);

            const params = new URLSearchParams(fullBody);
            const bodyObject = Object.fromEntries(params);

            console.log(bodyObject);

            fs.writeFileSync('user.txt', JSON.stringify(bodyObject));

            // Redirect after writing the file
            res.statusCode = 302;
            res.setHeader('Location', '/');
            res.end();
        });

        return; // Stop further execution until 'end' event
    }

    // Handle unknown routes
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>404</title></head>');
    res.write('<body><h1>Page Not Found</h1></body>');
    res.write('</html>');
    res.end();
};

const server = http.createServer(userRequestHandler);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
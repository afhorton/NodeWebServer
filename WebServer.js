const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(
    (req, res) => {
    const filePath = path.join( __dirname, req.url === '/' ? 'index.html' : req.url);
    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Error loading index.html');
        } else {
            res.statusCode = 200;
            res.setHeader("Content-Type", "text/html");
            res.end(data);
        }
    })});

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');

});
var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('This is Awesome');
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');

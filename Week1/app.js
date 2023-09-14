var message = "Hello World";
console.log(message);
// I want to use the http module
var http = require("http");
// I want to display the message to the http server
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(message);
  })
  .listen(3000); // The server will listen on port 3000

const log = require("../logger");
log('message');

const http = require("http");
// const hostname = '127.0.0.1';
const hostname = "localhost";
const port = 3000;

const server = http.createServer((request, response) => {
  console.log(request);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html");
  response.end("<h1>Hello Keyin World on a cloudy day!</h1>");
});

console.log("It is a cloudy day today");
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

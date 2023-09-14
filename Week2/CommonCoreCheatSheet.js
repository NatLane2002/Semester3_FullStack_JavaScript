// Practicing using different common core modules

// http (creating and running a server on local computer)

// This code creates a server on port 3000

// This is a program that creates a server on port 3000

const http = require("http");
const hostname = "localhost";
const port = 3000;

console.log("\n");

const server = http.createServer((request, response) => {
  console.log(request);
  response.statusCode = 200;
  response.setHeader = ("Content-Type", "text/html");
  response.end("Have a wonderful day!");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// os (getting information about the operating system)

const os = require("os");

console.log("\n");
console.log(os.arch()); // returns the operating system's architecture
console.log(os.cpus()); // returns an array of objects containing information about each cpu/core
console.log(os.freemem()); // returns the amount of free memory in bytes
console.log(os.homedir()); // returns the home directory of the current user
console.log(os.hostname()); // returns the hostname of the operating system
console.log(os.networkInterfaces()); // returns an object containing information about each network interface
console.log(os.platform()); // returns the operating system platform
console.log(os.release()); // returns the operating system release
console.log(os.tmpdir()); // returns the operating system's default directory for temporary files
console.log(os.totalmem()); // returns the total amount of system memory in bytes
console.log(os.type()); // returns the operating system name
console.log(os.uptime()); // returns the system uptime in seconds
console.log(os.userInfo()); // returns information about the current user

// path (working with file paths)

const path = require("path");

console.log("\n");
console.log(path.basename("C:\\temp\\myfile.html")); // returns the last portion of a path
console.log(path.delimiter); // returns the delimiter specified for the platform
console.log(path.dirname("C:\\temp\\myfile.html")); // returns the directory name of a path
console.log(path.extname("C:\\temp\\myfile.html")); // returns the extension name of a path
console.log(
  path.format({
    // returns a path string from an object
    dir: "C:\\temp",
    name: "myfile",
    ext: ".html",
  })
);
console.log(path.isAbsolute("C:\\temp\\myfile.html")); // returns true if the path is an absolute path
console.log(path.join("C:\\temp", "myfile.html")); // joins path segments
console.log(path.normalize("C:\\temp\\myfile.html")); // normalizes the specified path
console.log(path.parse("C:\\temp\\myfile.html")); // returns an object from a path string
console.log(path.posix); // provides access to POSIX specific implementations
console.log(path.relative("C:\\temp\\myfile.html", "C:\\temp\\myfile.html")); // returns the relative path from one path to another
console.log(path.resolve("C:\\temp\\myfile.html")); // resolves the specified path to an absolute path
console.log(path.sep); // returns the platform-specific path segment separator
console.log(path.win32); // provides access to Windows specific implementations

// querystring (working with query strings)

const querystring = require("querystring");

console.log("\n");
console.log(querystring.escape("name=John Doe")); // escapes a string
console.log(querystring.parse("name=John Doe")); // parses a URL query string into a collection of key and value pairs
console.log(querystring.stringify({ name: "John Doe" })); // converts an object to a URL query string
console.log(querystring.unescape("name%3DJohn%20Doe")); // unescapes a string

// url (working with URLs)

const url = require("url");

console.log("\n");
console.log(url.domainToASCII("español.com")); // converts a domain name into ASCII (American Standard Code for Information Interchange)
console.log(url.domainToUnicode("xn--espaol-zwa.com")); // converts a domain name into Unicode (Universal Coded Character Set)
console.log(url.format({ pathname: "C:\\temp\\myfile.html" })); // generates a URL from a URL object
console.log(url.parse("http://localhost:3000/")); // parses a URL into a URL object
console.log(url.resolve("http://localhost:3000/", "/one")); // resolves a URL
console.log(url.URL); // provides access to WHATWG URL API
console.log(url.URLSearchParams); // provides access to WHATWG URLSearchParams API

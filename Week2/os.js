var os = require("os");

console.log("\n");
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());

console.log("Hostname: " + os.hostname());
console.log("Free Memory: " + os.freemem());
console.log("Total Memory: " + os.totalmem());
console.log("\n");
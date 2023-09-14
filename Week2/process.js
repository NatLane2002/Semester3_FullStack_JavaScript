// The process.argv allows you to harvest parameters for the command line
// Like if you type from the command line
// C:\yada\yada> node process.js 1 2 3 4 5
// the one and the two would be considered command line arguments
// and you could use them inside the application. Becomes super important
// when creating a CLI (command line interface)

const [firstArg, secondArg, thirdArg, forthArg, fifthArg] = process.argv;
console.log(process.argv);
console.log("First: ", firstArg);
console.log("Second: ", secondArg);
console.log("Third: ", thirdArg);

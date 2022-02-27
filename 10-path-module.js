const path = require("path");

console.log(path.sep);

// path.join just create a path string with os default seperator.
// const filePath1 = path.join("/co","su","te.txt");
// console.log(filePath1);

const filePath = path.join("/content","subfolder","test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// let absolute = path.resolve(__dirname);
const absolute = path.resolve(__dirname, "content","subfolder","test.txt");
console.log(absolute);
// method1 by using only promises.
// const {readFile} = require("fs");

// const getText = (path) => {
//     return new Promise((resolve,reject) => {
//         readFile(path,"utf-8",(error, result) => {
//             if(error) {
//                 reject(error)
//             } else {
//                 resolve(result);
//             }
//         });
//     });   
// }

// getText("./content/first.txt").then(result => {
//     getText("./content/second.txt").then(result2 => {
//         console.log(result + "|" + result2);
//     })
// }).catch((err) => console.log(err));

// by using async await
// const {readFile} = require("fs");
// const getText = async (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,"utf8",(err,res) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(res);
//             }
//         });
//     });
// }
// const startGettingText = async () => {
//     try {
//         const first = await getText("./content/first.txt");
//         const second = await getText("./content/second.txt");
//         console.log(first + " | " + second);
//     } catch(err) {
//         console.log(err);
//     }
// }
// startGettingText();



// using util.promisify function to return function that returns promise.
// const {readFile, writeFile} = require("fs");
// util is node inbuiltmodule
// const util = require("util");

// readFilePromise is a function (it takes path,encoding as args) 
// that returns a promise.
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
// readFilePromise("./content/first.txt","utf-8").then(result => {
//     console.log(result);
// }).catch(err => console.log(err));

// const start = async () => {
//     try {
//         const first = await readFilePromise("./content/first.txt","utf-8");
//         const second = await readFilePromise("./content/second.txt","utf-8");

//         await writeFilePromise("./content/writefile-utilpromisify.txt",
//          first + " | " + second, {flag: "a"});
//         console.log(first + " | " + second);
//     } catch(err) {
//         console.log(err);
//     }
// }

// start();




// ********Here just importing module is different remaining is same as above.
/*
    // longer way
    const fs = require("fs");
    console.log(fs.promises);
    const { readFile, writeFile } = fs.promises;

*/

// short way
const {readFile,writeFile} = require("fs").promises;

const start = async () => {
    try {
        const first = await readFile("./content/first.txt","utf-8");
        const second = await readFile("./content/second.txt","utf-8");

        await writeFile("./content/writefile-utilpromisify.txt",
         first + " | " + second, {flag: "a"});
        console.log(first + " | " + second);
    } catch(err) {
        console.log(err);
    }
}

start();



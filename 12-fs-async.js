// const fs = require("fs");
// fs.readFileSync();

const { readFile,writeFile } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
    if(err) {
        console.log(err);
        return err;
    } 
    const first = result;
    readFile("./content/second.txt","utf8",(err,result) => {
        if(err) {
            console.log(err);
            return err;
        } 
        const second = result;

        writeFile("./content/result-async.txt",
        `Here is the result: ${first}, ${second}`, (err,result) => {
            if(err) {
                console.log(err);
                return err;
            } 
            console.log(result);
        });
    });
});
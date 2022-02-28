const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    // const text = fs.readFileSync("./content/bigger-file.txt","utf-8");
    // res.end(text);
    const fileStream = fs.createReadStream("./content/bigger-file.txt");
    fileStream.on("open",() => {
        fileStream.pipe(res);
    });
    fileStream.on("error",(err) => {
        console.log(err);
    });
}).listen(5000);
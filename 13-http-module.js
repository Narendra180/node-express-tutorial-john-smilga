const http = require("http");

// request, response
const server = http.createServer((req,res) => {
    if(req.url === "/") {
        res.end("Welcome to our homepage");
    }
    if(req.url === "/about") {
        res.end("Here is our short history")
    }
    res.end("<h1>OOps!</h1> <p>We can't seem to find the page you are looking for</p> <a href=\"/\">Back to home</a>");
    console.log(req);
    // res.write("Welcome to our homepage");
});

server.listen(5000);
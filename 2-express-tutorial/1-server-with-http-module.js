const http = require("http");

const server = http.createServer((request,response) => {
    const url = request.url;

    if(url === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        response.write("<h1>Welcome to our Home Page</h1>");
        response.end();
    } else if(url === "/about") {
        response.writeHead(200, {"content-type": "text/html"});
        response.write("<h1>This is about page</h1>");
        response.end();
    } else {
        response.writeHead(404, {"content-type": "text/html"});
        response.write("<h1>The Page you're for is not found</h1>");
        response.end();
    }
});

server.listen(5000, () => console.log("server listening at port 5000"));
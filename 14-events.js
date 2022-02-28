const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("request", () => {
    console.log("request received");
});

customEvent.on("request", (name,id) => {
    console.log(`request received, ${name} ${id}`);
});

// these word and 45 will be passed to callback.
customEvent.emit("request", "word", 45);



const http = require("http");
// const server = http.createServer((req,res) => {
//     res.end("Welcome");
// });
// server.listen(5000, () => {
//     console.log("Server running on port 5000");
// });

const server = http.createServer();
server.on('request', (req,res) => {
    res.end("welcome !!!");
});
server.listen(5000);
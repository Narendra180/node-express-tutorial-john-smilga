const express = require("express");
const app = express();

const logger = require("./logger-middleware.js");

const { products, people } = require("./data");

// middleware is code that runs between req and before sending response.
// req => middleware => res/

// const logger = (req,res) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
// }

// app.get("/", (req,res) => {
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time);
//     res.send("Home Page");
// });

// app.get("/", (req,res) => {
//     logger(req,res);
//     res.send("Home Page");
// });

// app.get("/about", (req,res) => {
//     logger(req,res);
//     res.send("About Page");
// })

// app.listen(5000, () => {
//     console.log("Server listening on port 5000.....");
// });


// app.get("/", logger, (req,res) => {
//     // logger(req,res);
//     res.send("Home Page");
// });

// app.get("/about",logger, (req,res) => {
//     // logger(req,res);
//     res.send("About Page");
// })

// app.listen(5000, () => {
//     console.log("Server listening on port 5000.....");
// });


// instead of adding middleware like aboe we can use app.use function;
app.use(logger);

// we can also give path to app.use which will run middleware if app.get or
// or any other request method url have the given path in use.
// app.use("/api",logger);

app.get("/", (req,res) => {
    // logger(req,res);
    res.send("Home Page");
});

app.get("/about", (req,res) => {
    // logger(req,res);
    res.send("About Page");
})

app.get("/api/products", (req,res) => {
    res.send(products);
});

app.get("/api/people", (req,res) => {
    res.send(people);
});

app.listen(5000, () => {
    console.log("Server listening on port 5000.....");
});
const express = require("express");
const app = express();

const peopleRouter = require("./routes/people");
const authRouter = require("./routes/auth");

app.use(express.static("./methods-public"));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use("/api/people",peopleRouter);
app.use("/login",authRouter);


// app.get("/",(req,res) => {
//     res.send("Home Page");
// });

app.listen(5000,() => console.log("Server Listening on port 5000....."));
const { createReadStream } = require("fs");

const readStream = createReadStream("./content/big-file.txt");

// console.log(readStream);

readStream.on("data", (result) => {
    console.log(result)
});

readStream.on("error", (err) => {
    console.log(err);
});

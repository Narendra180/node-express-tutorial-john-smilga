const { writeFileSync } = require("fs");

for(let i = 1; i <= 100000;i++) {
    writeFileSync("./content/bigger-file.txt", 
                    ("Hello World- "+i+"\n"), {flag: "a"});
}


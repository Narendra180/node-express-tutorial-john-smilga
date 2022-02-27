// NodeJS use common js for modules, every file is module(by default)
// Modules - Encapsulated code (only share minimum).

const secret = "Super Secret";
const john = "john";
const peter = "peter";

const sayHi = (name) => {
    console.log(`Hi ${name}`);
}

sayHi("Susan");
sayHi(john);
sayHi(peter);
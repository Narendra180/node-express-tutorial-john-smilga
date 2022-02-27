const names = require("./4-names-firstmodule");
const {john,peter} = names;
const sayHi = require("./5-utils-secondmodule");

const data = require("./6-alternative-exportstyle");
console.log(data);

require("./7-runfunctionwithmodule");

sayHi("Susan");
sayHi(john);
sayHi(peter);
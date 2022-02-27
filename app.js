const _ = require("lodash");

let items = [1,[2,[3,[4,[5,[6,[7]]]]]]];

let flatItems = _.flattenDeep(items);

console.log(flatItems);
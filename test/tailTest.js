const assertEqual = require("../assertEqual");
const tail = require("../tail");

let output = tail([]);
assertEqual(tail([]).length, 0);
assertEqual(tail([1,2,3]).length, 2);
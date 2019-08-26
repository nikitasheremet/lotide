const assertEqual = require("./assertEqual");

const countLetter = (string) => {
  result = {};
  let uniqueSet = new Set (string.split(" ").join(""));
  uniqueSet.forEach(item => {
    let regex = new RegExp (item, "g");
    result[item] = string.match(regex).length;
  });
  return result;
}

module.exports = countLetter;

assertEqual(countLetter("lighthouse in the house").l, 1);
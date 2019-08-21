const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅ ${actual} === ${expected}` : `❌❌ ${actual} !== ${expected}`);
};

const countLetter = (string) => {
  result = {};
  let uniqueSet = new Set (string.split(" ").join(""));
  uniqueSet.forEach(item => {
    let regex = new RegExp (item, "g");
    result[item] = string.match(regex).length;
  });
  return result;
}  


assertEqual(countLetter("lighthouse in the house").l, 1);
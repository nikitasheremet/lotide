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
  console.log(result);
  return result;
}  


assertEqual(countLetter("lighthouse in the house"),{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});
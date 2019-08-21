const letterPosition = (string) => {
  result = {};
  let uniqueSet = new Set (string.split(" ").join(""));
  uniqueSet.forEach(item => {
    let regex = new RegExp (item, "g");
    result[item] = string.match(regex);
  });
  console.log(result);
  return result;
};

letterPosition("lighthouse in the house");
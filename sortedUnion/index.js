const uniteUnique = (...arr) => {
  let result = [];
  arr.forEach((array) => {
    for (let i = 0; i < array.length; i++) {
      const notUnique = result.find(num => num === array[i]);
      if (notUnique === undefined) {
        result.push(array[i]);
      }
    }
  });
  return result;
};

module.exports = uniteUnique;

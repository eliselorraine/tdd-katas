const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source);
  let arr = [];
  if (sourceKeys.length === 1) {
    arr = collection.filter((obj) => obj.last === source.last);
    return arr;
  } else if (sourceKeys.length > 1) {
    arr = matches(collection, source);
    return arr;
  }
  return arr;
};

const matches = (collection, source) => {
  let answer = [];
  const sourceKeys = Object.keys(source);
  const sourceValues = Object.values(source);
  collection.forEach((obj, i) => {
    const collectionKeys = Object.keys(obj);
    const collectionValues = Object.values(obj);
    for (let j = 0; j < collectionKeys.length; j++) {
      if (
        collectionKeys[j] === sourceKeys[j] &&
        collectionValues[j] === sourceValues[j]
      ) {
        answer.push(collection[i]);
        return;
      } 
    }
  });
  return answer;
};
let morePairs = whatIsInAName(
    [
      { "apple": 1, "bat": 2 }, 
      { "apple": 1 }, 
      { "apple": 1, "bat": 2, "cookie": 2 }
    ], 
    { "apple": 1, "cookie": 2 }
    ) 

console.log(
  morePairs
);

module.exports = whatIsInAName;

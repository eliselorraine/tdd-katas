const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source);
  console.log(source.length);
  let arr = [];
  if (sourceKeys.length === 1) {
      arr = collection.filter((obj) => obj.last === source.last);
      return arr;
  } else if (sourceKeys.length > 1) {
      arr = collection.filter((obj) => obj.last == source.last);
  }
  return arr;
};

const matches = (collection, source) => {
    for(let i = 0; i < collection.length; i++) {
        
    }
}
let pairs = whatIsInAName(
[
    { "apple": 1, "bat": 2 }, 
    { "bat": 2 }, 
    { "apple": 1, "bat": 2, "cookie": 2 }
], 
    { "apple": 1, "bat": 2 }
) 

console.log(pairs);

module.exports = whatIsInAName;

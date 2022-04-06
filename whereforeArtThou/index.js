const whatIsInAName = (collection, source) => {
  const sourceKeys = Object.keys(source);
  let arr = [];
  if (sourceKeys.length === 1) {
    arr = collection.filter((obj) => obj.last === source.last);
    return arr;
  } else if (sourceKeys.length > 1) {
    arr = sourceConditions(collection, source);
    return arr;
  }
  return arr;
};


// Consider each key-value pair in the source a condition.

const sourceConditions = (collection, source) => {
  let answer = collection;
  const sourceKeys = Object.keys(source);
  const sourceValues = Object.values(source);
  collection.forEach((obj, i) => {
      const collectionKeys = Object.keys(obj);
      const collectionValues = Object.values(obj);
      
      for (let j = 0; j < sourceKeys.length; j++) {
          const keyCheck = collectionKeys.find((key) => key === sourceKeys[j]);
          if (keyCheck === undefined) {
              answer = answer.filter((element) => element !== obj);
        return;
    }
}
  });
  return answer;
};

    
    module.exports = whatIsInAName;
    
    // const matches = (collection, source) => {
    //   let answer = [];
    //   const sourceKeys = Object.keys(source);
    //   const sourceValues = Object.values(source);
    //   collection.forEach((obj, i) => {
    //     const collectionKeys = Object.keys(obj);
    //     const collectionValues = Object.values(obj);
    //     for (let j = 0; j < collectionKeys.length; j++) {
    //       if (
    //         collectionKeys[j] === sourceKeys[j] &&
    //         collectionValues[j] === sourceValues[j]
    //       ) {
    //         answer.push(collection[i]);
    //         return;
    //       }
    //     }
    //   });
    //   return answer;
    // };
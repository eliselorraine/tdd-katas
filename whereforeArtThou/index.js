const whatIsInAName = (collection, source) => {
    let answer = collection;
    const sourceKeys = Object.keys(source);
    const sourceValues = Object.values(source);
    collection.forEach((obj) => {
      const collectionKeys = Object.keys(obj);
      const collectionValues = Object.values(obj);
      for (let j = 0; j < sourceKeys.length; j++) {
        const keyCheck = collectionKeys.find((key) => key === sourceKeys[j]);
        const valueCheck = collectionValues.find(
          (value) => value === sourceValues[j]
        );
        if (keyCheck === undefined || valueCheck === undefined) {
          answer = answer.filter((element) => element !== obj);
          return;
        }
      }
    });
    return answer;
};

module.exports = whatIsInAName;

const dropIt = (arr, func) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const boolean = func(arr[i]);
    if (boolean === true) {
      let index = arr.indexOf(arr[i]);
      const slice = arr.slice(index);
      result.push(...slice);
      return result;
    }
  }
  return result;
};

module.exports = dropIt;

const truthCheck = (collection, pre) => {
  let truth = true;
  for (const key in collection) {
    if (!collection[key][pre]) {
      truth = false;
    }
  }
  return truth;
};

module.exports = truthCheck;

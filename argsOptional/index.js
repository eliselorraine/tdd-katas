const addTogether = (...args) => {
  const arrayOfArgs = [...args];
  const first = arrayOfArgs[0];
  const second = arrayOfArgs[1];
  let sum;
  if (arrayOfArgs.length > 1 && isNumber(first) && isNumber(second)) {
    sum = arrayOfArgs[0] + arrayOfArgs[1];
    return sum;
  } else if (arrayOfArgs.length === 1 && isNumber(first)) {
    return (second) => addTogether(first, second);
  }
  return sum;
};

const isNumber = (num) => {
  if (typeof num === "number") {
    return true;
  }
  return false;
};


module.exports = addTogether;

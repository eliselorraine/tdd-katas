const sumFibs = (num) => {
  let arr = [1, 1];
  let x = 0;
  while (x < num) {
    addLastTwo(arr);
    x = arr[arr.length - 1];
  }
  if (arr[arr.length - 1] !== num) {
    arr.pop();
  }
  arr = arr.filter((num) => num % 2 !== 0);
  arr = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  );
  return arr;
};

const addLastTwo = (arr) => {
  const nextFib = arr[arr.length - 1] + arr[arr.length - 2];
  arr.push(nextFib);
  return arr;
};

module.exports = sumFibs;

// const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// expected output: 10

const sumPrimes = (num) => {
  let primeArr = [];
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    primeArr.push(i);
  }
  for (let i = primeArr.length; i > 0; i--) {
    let dividedBy = primeArr.filter((number) => number < primeArr[i]);
    dividedBy.forEach((divisor) => {
      if (primeArr[i] % divisor === 0 && primeArr[i] !== divisor) {
        primeArr.splice(i, 1);
      }
    });
    sum = primeArr.reduce(
      (previousValue, currentValue) => previousValue + currentValue
    );
  }
  return sum;
};

module.exports = sumPrimes;

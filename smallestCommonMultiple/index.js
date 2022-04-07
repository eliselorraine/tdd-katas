// not my own solution. had to google. 

const smallestCommons = (arr) => {
  let allPrimeFactors = {};
  arr.sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    let primes = primeFactors(i);
    for (let key in primes) {
      if (!allPrimeFactors[key] || primes[key] > allPrimeFactors[key]) {
        allPrimeFactors[key] = primes[key];
      }
    }
  }
  let multiple = 1; 
  for (let i in allPrimeFactors) {
      multiple *= i ** allPrimeFactors[i]
  }
  return multiple;
};

const primeFactors = (num) => {
  const factors = {};
  for (let prime = 2; prime <= num; prime++) {
    // Count occurances of factor
    // Note that composite values will not divide num
    while (num % prime === 0) {
      factors[prime] = factors[prime] ? factors[prime] + 1 : 1;
      num /= prime;
    }
  }
  return factors;
};

module.exports = smallestCommons;

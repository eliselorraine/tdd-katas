const telephoneCheck = (str) => {
  let split = str.split("");
  const re = /\d/;
  const numbersOnly = split.filter((el) => re.test(el) === true);
  const format = /1?\d{10}/gm;
  console.log({
    numbersOnly,
  });
  const joined = numbersOnly.join("");
  if (format.test(joined)) {
    return true;
  }
  return false;
};

// has to be either 10 or 11 digits
// if 11, the first index has to be 1
// if not 11, the length has to be 10

console.log(telephoneCheck("1 (123) 456-7890"));

module.exports = telephoneCheck;

// /^1?((\W{2}\d{3}\W{2})|(\W{1}\d{3}\W{1}))\d{3}\W\d{4}/gm

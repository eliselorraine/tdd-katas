const romanNumeral = (num) => {
  let str = num.toString();
  if (str.length === 1) {
    return singleNumeral(num);
  }
  let tens = str.split("");
  let x = "";
  for (let i = tens.length - 1; i >= 0; i--) {
    tens[i] = tens[i].concat(x);
    x = x.concat("0");
  }

  let numeralArr = tens.map((ten) => singleNumeral(ten));
  let numeral = numeralArr.join("");
  return numeral;
};

const singleNumeral = (num) => {
  let numeral;
  for (key in romanLibrary) {
    if (key == num) {
      numeral = romanLibrary[key];
      return numeral;
    }
  }
  return numeral;
};

const romanLibrary = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
};

console.log(romanNumeral(509));
// console.log(singleNumeral(2));

module.exports = romanNumeral;

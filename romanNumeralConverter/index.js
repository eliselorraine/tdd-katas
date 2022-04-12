const romanNumeral = (num) => {
  let ans;
  let arr = [];
  let str = num.toString();
  const lastDigit = str[str.length - 1];
    console.log(lastDigit);
  for (key in romanLibrary) {
    if (key == num) {
        ans = romanLibrary[key]; 
        return ans; 
    } 
  }
  return ans;
};

const romanLibrary = {
    '1': 'I',
    '2': 'II',
    '3': 'III',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',


    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M',
};

console.log(romanNumeral(12));

module.exports = romanNumeral;

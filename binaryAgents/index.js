const binaryAgent = (str) => {
  let split = str.split(' '); 
  const mapped = split.map((code) => convertChar(code)); 
  const concat = mapped.join('');
  return concat;
};

const convertChar = (string) => {
  let str = reverseString(string);
  let indexArr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      indexArr.push(i);
    }
  }
  const mapped = indexArr.map(index => Math.pow(2, index));
  const sum = mapped.reduce((prev, curr) => prev + curr);
  return String.fromCharCode(sum);
};

const reverseString = (str) => {
  let splitStr = str.split("");
  let reverseArr = splitStr.reverse();
  let joinArray = reverseArr.join("");
  return joinArray;
};


module.exports = binaryAgent;


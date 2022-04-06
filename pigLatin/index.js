const vowelCheck = (str) => {
  const beginsWithVowel = /^[aeiou]/gm;
  const check = beginsWithVowel.test(str);
  return check;
};

const translatePigLatin = (str) => {
  let result = str;
  let substring = "";
  const beginsWithVowel = /^[aeiou]/gm;
  const end = "ay";
  const check = vowelCheck(result);
  let index = 1;
  while (!check && index < result.length) {
    result = str.slice(index);
    substring = str.substring(0, index);
    index++;
  }
  result = result.concat(substring, end);
  return result;
};

console.log(translatePigLatin("california"));

module.exports = translatePigLatin;

// let index = 1;
// if (!vowelCheck) {
//   result = str.slice(index);
//   substring = str.substring(0, index);
//   index++;
// }
// if (!vowelCheck) {
//   result = str.slice(index);
//   substring = str.substring(0, index);
//   index++;
// }
// result = result.concat(substring, end);

const vowelCheck = (str) => {
  const beginsWithVowel = /^[aeiou]/gm;
  const check = beginsWithVowel.test(str);
  return check;
};

const beginsWithConsonant = (str) => {
  let result = str;
  let substring = "";
  let end = "";
  let index = 1;
  while (!vowelCheck(result) && index < str.length + 1) {
    result = str.slice(index);
    substring = str.substring(0, index);
    end = "ay";
    index++;
  }
  result = result.concat(substring, end);
  return result;
};

const beginsWithVowel = (str) => {
  return str.concat("way");
};

const translatePigLatin = (str) => {
  let result;
  if (vowelCheck(str)) {
    result = beginsWithVowel(str);
  } else if (!vowelCheck(str)) {
    result = beginsWithConsonant(str);
  }
  return result;
};

module.exports = translatePigLatin;

const myReplace = (str, before, after) => {
  const regex = /[A-Z]/gm;
  const firstLetter = after.charAt(0); 
  if (regex.test(before)) {
      after = after.replace(firstLetter, firstLetter.toUpperCase()); 
  } else if (regex.test(after)) {
      after = after.replace(firstLetter, firstLetter.toLowerCase());
  }
  let answer = str.replace(before, after); 
  return answer;
};

module.exports = myReplace; 
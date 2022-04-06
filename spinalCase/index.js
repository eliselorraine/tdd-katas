const spinalCase = (str) => {
  const regex = /[^a-zA-Z0-9]/gm;
  const regexTest = /(?=[A-Z])(?!\b)/gm; // positive lookahead, negative lookbehind for lowercaseCapital boundaries
  let result = str.replaceAll(regex, "-");
  if (regexTest.test(str)) {
    result = result.replace(regexTest, "-");
  }
  result = result.toLowerCase();
  return result;
};

module.exports = spinalCase;

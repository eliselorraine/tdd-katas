const returnPair = (letter) => {
  switch (letter) {
    case "A":
      return ["A", "T"];
    case "T":
      return ["T", "A"];
    case "C":
      return ["C", "G"];
    case "G":
      return ["G", "C"];
    default:
      return null;
  }
};

const pairElement = (str) => {
  let result = [];
  let pairs = str.split("");
  pairs.forEach((letter) => {
    const newPair = returnPair(letter);
    result.push(newPair);
  });
  return result;
};

module.exports = pairElement;

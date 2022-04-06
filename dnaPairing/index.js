const returnPair = (letter) => {
  switch (letter) {
    case "A":
      return ["A", "T"];
      break;
    case "T":
      return ["T", "A"];
      break;
    case "C":
      return ["C", "G"];
      break;
    case "G":
      return ["G", "C"];
      break;
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

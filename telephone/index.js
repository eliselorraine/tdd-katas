const telephoneCheck = (str) => {
  const split = str.split("");
  const whitespace = /\s/
  const noWhiteSpace = split.filter(el => whitespace.test(el) === false).join("");
  const telephone = /^1?(([(]\d{3}[)])|(\d{3}[-]?))\d{3}\W?\d{4}$/gm
  if (telephone.test(noWhiteSpace)) {
    return true;
  }
  return false;
};


module.exports = telephoneCheck;


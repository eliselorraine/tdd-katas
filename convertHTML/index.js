const returnHTML = (str) => {
  switch (str) {
    case "&":
      return "&amp;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case '"':
      return "&quot;";
    case "'":
      return "&apos;";
    default:
      return null;
  }
};

const convertHTML = (str) => {
  let result = str;
  const regex = /[^a-zA-Z\s]/gm;
  const found = str.match(regex);
  if (!found) {
    return result;
  }
  found.forEach((element) => {
    const replacement = returnHTML(element);
    result = result.replace(element, replacement);
  });
  return result;
};

module.exports = convertHTML;

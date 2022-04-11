const steamroll = (arr) => {
  let flattened = [];
  let input = [...arr];

  while (input.length) {
    const next = input.pop();
    if (Array.isArray(next)) {
      input.push(...next);
    } else {
      flattened.push(next);
    }
  }
  flattened.reverse();
  return flattened;
};

module.exports = steamroll;
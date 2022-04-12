const rot13 = (str) => {
  const split = str.split("");
  const result = split.map(el => getCode(el));
  return result.join('');
};

const getCode = (str) => {
    const re = /[^A-Z]/gm; 
    if (re.test(str)) return str;
    let ans = str.charCodeAt(0);
    ans -= 13; 
    if (ans <= 64) {
        const difference = 64 - ans; 
        ans = 90 - difference; 
    } 
    ans = String.fromCharCode(ans); 
    return ans; 
}

module.exports = rot13;

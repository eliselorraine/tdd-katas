const isAlphaNumeric = (string) => {
    let re = /[^a-zA-Z0-9]/gm;
    if (re.test(string)) {
        return false;
    }
    return true;
}

const palindrome = (str) => {
    str = str.toLowerCase();
    let arr = str.split('');
    arr = arr.filter(el => isAlphaNumeric(el)); 
    const original = [...arr];
    arr.reverse();
    for (let i = 0; i < original.length; i++) {
        if (arr[i] != original[i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome;
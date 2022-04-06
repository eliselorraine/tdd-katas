const alphabetArray = [
    "a", "b", "c",
    "d", "e", "f",
    "g", "h", "i",
    "j", "k", "l",
    "m", "n", "o",
    "p", "q", "r",
    "s", "t", "u", 
    "v", "w", "x", 
    "y", "z"
]

const fearNotLetter = (str) => {
    let missingLetter; 
    const split = str.split('');
    let index = alphabetArray.indexOf(split[0]);
    for (let i = 0; i < split.length; i++) {
        if (alphabetArray[index] !== split[i]) {
            missingLetter = alphabetArray[index]; 
            return missingLetter;
        }
        index++;
    }
    return missingLetter;
};

module.exports = fearNotLetter;


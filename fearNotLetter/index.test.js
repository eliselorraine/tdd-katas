const fearNotLetter = require('./index');

describe('the fearNotLetter function', () => {
    it('should return the missing letter', () => {
        const expected = "d"; 
        expect(fearNotLetter("abce")).toStrictEqual(expected); 
    })
    it('should return the missing letter', () => {
        const expected = "i"; 
        expect(fearNotLetter("abcdefghjklmno")).toStrictEqual(expected); 
    })
    it('should handle strings that do not start with a', () => {
        const expected = "u"; 
        expect(fearNotLetter("stvwx")).toStrictEqual(expected); 
    })
    it('should handle strings that do not start with a', () => {
        const expected = "e"; 
        expect(fearNotLetter("bcdf")).toStrictEqual(expected); 
    })
    it('should return undefined if there are no missing letters', () => {
        const expected = undefined; 
        expect(fearNotLetter("abcdefghijklmnopqrstuvwxyz")).toStrictEqual(expected); 
    })
})
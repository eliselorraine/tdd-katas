const addTogether = require('./index');

describe('the add together function', () => {
    it('return the sum of two numerical arguments', () => {
        expect(addTogether(2, 3)).toBe(5);
    })
    it('return the sum of two numerical arguments', () => {
        expect(addTogether(23, 30)).toBe(53);
    })
    it('return the sum of two numerical arguments', () => {
        expect(addTogether(5)(7)).toBe(12);
    })
    it('return undefined if the arguments are not numbers', () => {
        expect(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(undefined);
    })
    it('return undefined if the numbers are passed as strings', () => {
        expect(addTogether(2, "3")).toBe(undefined);
    })
    it('return undefined if the arguments are not numbers', () => {
        expect(addTogether(2, [3])).toBe(undefined);
    })
    it('return not convert strings to numbers', () => {
        expect(addTogether("2", 3)).toBe(undefined);
    })
    
}); 
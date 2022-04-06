const uniteUnique = require('./index');

describe('the uniteUnique function', () => {
    it('should return an array of the unique numbers', () => {
        const expected = [1, 3, 2, 5, 4];
        expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).toStrictEqual(expected); 
    })
    it('should handle various numbers of arrays as arguments', () => {
        const expected = [1, 2, 3, 5];
        expect(uniteUnique([1, 2, 3], [5, 2, 1])).toStrictEqual(expected); 
    })
    it('should maintain the correct order provided by the order of arguments', () => {
        const expected = [1, 2, 3, 5, 4, 6, 7, 8];
        expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).toStrictEqual(expected); 
    })
    it('should handle duplicates in the last argument', () => {
        const expected = [1, 3, 2, 5, 4, 6];
        expect(uniteUnique([1, 3, 2], [5, 4], [5, 6])).toStrictEqual(expected); 
    })
    it('should handle duplicates in the last argument', () => {
        const expected = [1, 3, 2, 5, 4];
        expect(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1])).toStrictEqual(expected); 
    })
})
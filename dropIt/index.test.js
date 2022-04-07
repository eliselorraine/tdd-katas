const dropIt = require('./index');

describe('the drop it function', () => {
    it('should drop the numbers that do not return true', () => {
        const func = (n) => n >= 3; 
        expect(dropIt([1, 2, 3, 4], func)).toStrictEqual([3, 4]);
    })
    it('should drop the numbers that do not return true', () => {
        const func = (n) => n === 1; 
        expect(dropIt([0, 1, 0, 1], func)).toStrictEqual([1, 0, 1]);
    })
    it('should return original array when the function never returns true', () => {
        const func = (n) => n > 0; 
        expect(dropIt([1, 2, 3], func)).toStrictEqual([1, 2, 3]);
    })
    it('should return original array when the function always returns true', () => {
        const func = (n) => n > 0; 
        expect(dropIt([1, 2, 3], func)).toStrictEqual([1, 2, 3]);
    })
    it('should return an empty array when the function never returns true', () => {
        const func = (n) => n > 5; 
        expect(dropIt([1, 2, 3, 4], func)).toStrictEqual([]);
    })
    it('should stop iterating once it returns true', () => {
        const func = (n) => n > 3; 
        expect(dropIt([1, 2, 3, 7, 4], func)).toStrictEqual([7, 4]);
    })
    it('should stop iterating once it returns true', () => {
        const func = (n) => n > 2; 
        expect(dropIt([1, 2, 3, 9, 2], func)).toStrictEqual([3, 9, 2]);
    })
})
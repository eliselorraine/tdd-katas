const sumFibs = require('./index')

describe('the sumFibs function', () => {
    it('should return a number', () => {
        expect(sumFibs(1)).not.toBeNaN(); 
    })
    it('should return the sum of odd fibonacci numbers', () => {
        expect(sumFibs(1000)).toBe(1785); 
    })
    it('handle huge numbers', () => {
        expect(sumFibs(4000000)).toBe(4613732); 
    })
    it('should handle small numbers', () => {
        expect(sumFibs(4)).toBe(5); 
    })
    it('should handle other numbers', () => {
        expect(sumFibs(75024)).toBe(60696); 
    })
    it('should handle other numbers', () => {
        expect(sumFibs(75025)).toBe(135721); 
    })
})
const sumPrimes = require('./index');

describe('the sum primes function', () => {
    it('should return a number', () => {
        expect(sumPrimes(10)).not.toBeNaN(); 
    })
    it('should return the sum of primes lower than the num', () => {
        expect(sumPrimes(10)).toBe(17); 
    })
    it('should handle large numbers', () => {
        expect(sumPrimes(977)).toBe(73156); 
    })
})
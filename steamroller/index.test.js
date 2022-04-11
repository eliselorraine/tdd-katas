const steamroll = require('./index');

describe('the steamroll function', () => {
    it('should flatten a given array', () => {
        expect(steamroll([[["a"]], [["b"]]])).toStrictEqual(["a", "b"]);
    })
    it('should handle inconsistent nesting', () => {
        expect(steamroll([1, [2], [3, [[4]]]])).toStrictEqual([1, 2, 3, 4]);
    })
    it('should return the original order', () => {
        expect(steamroll([1, [], [3, [[4]]]])).toStrictEqual([1, 3, 4]);
    })
    it('should handle input that is not a string or number', () => {
        expect(steamroll([1, {}, [3, [[4]]]])).toStrictEqual([1, {}, 3, 4]);
    })
})
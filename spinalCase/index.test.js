const spinalCase = require("./index");

describe('spinal case', () => {
    it('should convert a string to spinal case', () => {
        const expected = "this-is-spinal-tap";
        expect(spinalCase("This Is Spinal Tap")).toStrictEqual(expected);
    })
})
const spinalCase = require("./index");

describe('spinal case', () => {
    it('should convert a string to spinal case', () => {
        const expected = "this-is-spinal-tap";
        expect(spinalCase("This Is Spinal Tap")).toStrictEqual(expected);
    })
    it('should handle more than just spaces', () => {
        const expected = "the-andy-griffith-show";
        expect(spinalCase("The_Andy_Griffith_Show")).toStrictEqual(expected); 
    })
    it('should handle already existing hyphens', () => {
        const expected = "teletubbies-say-eh-oh";
        expect(spinalCase("Teletubbies say Eh-oh")).toStrictEqual(expected); 
    })
    it('should handle word breaks without spaces', () => {
        const expected = "all-the-small-things";
        expect(spinalCase("AllThe-small Things")).toStrictEqual(expected); 
    })
})
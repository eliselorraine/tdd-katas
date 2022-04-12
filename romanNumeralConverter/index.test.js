const romanNumeral = require("./index");

describe("the roman numeral converter function", () => {
    it("should convert numbers to roman numerals", () => {
      expect(romanNumeral(2)).toStrictEqual("II");
    });
    it("should convert numbers to roman numerals", () => {
      expect(romanNumeral(3)).toStrictEqual("III");
    });
    it("should handle numbers 4 or greater", () => {
      expect(romanNumeral(4)).toStrictEqual("IV");
    });
    it("should handle numbers 4 or greater", () => {
      expect(romanNumeral(5)).toStrictEqual("V");
    });
    it("should handle numbers between 5 and 10", () => {
      expect(romanNumeral(9)).toStrictEqual("IX");
    });
    it("should handle numbers greater than 10", () => {
      expect(romanNumeral(12)).toStrictEqual("XII");
    });
});

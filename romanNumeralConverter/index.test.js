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
    it("should handle numbers greater than 10", () => {
      expect(romanNumeral(16)).toStrictEqual("XVI");
    });
    it("should handle numbers greater than 20", () => {
      expect(romanNumeral(29)).toStrictEqual("XXIX");
    });
    it("should handle numbers greater than 20", () => {
      expect(romanNumeral(44)).toStrictEqual("XLIV");
    });
    it("should handle numbers greater than 20", () => {
      expect(romanNumeral(45)).toStrictEqual("XLV");
    });
    it("should handle numbers greater than 50", () => {
      expect(romanNumeral(68)).toStrictEqual("LXVIII");
    });
    it("should handle numbers greater than 50", () => {
      expect(romanNumeral(83)).toStrictEqual("LXXXIII");
    });
    it("should handle numbers greater than 50", () => {
      expect(romanNumeral(97)).toStrictEqual("XCVII");
    });
    it("should handle numbers greater than 50", () => {
      expect(romanNumeral(99)).toStrictEqual("XCIX");
    });
    it("should handle numbers greater than 100", () => {
      expect(romanNumeral(400)).toStrictEqual("CD");
    });
    it("should handle numbers greater than 500", () => {
      expect(romanNumeral(500)).toStrictEqual("D");
    });
    it("should handle numbers greater than 500", () => {
      expect(romanNumeral(501)).toStrictEqual("DI");
    });
    it("should handle numbers greater than 500", () => {
      expect(romanNumeral(649)).toStrictEqual("DCXLIX");
    });
    it("should handle numbers greater than 500", () => {
      expect(romanNumeral(798)).toStrictEqual("DCCXCVIII");
    });
    it("should handle numbers greater than 500", () => {
        expect(romanNumeral(891)).toStrictEqual("DCCCXCI");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(1000)).toStrictEqual("M");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(1004)).toStrictEqual("MIV");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(1006)).toStrictEqual("MVI");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(1023)).toStrictEqual("MXXIII");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(2014)).toStrictEqual("MMXIV");
    });
    it("should handle numbers greater than 1000", () => {
      expect(romanNumeral(3999)).toStrictEqual("MMMCMXCIX");
    });
});

const convertHTML = require("./index");

describe("the convert html function", () => {
  it("should handle ampersands", () => {
    const expected = "Dolce &amp; Gabbana";
    expect(convertHTML("Dolce & Gabbana")).toStrictEqual(expected);
  });
  it("should handle multiple symbols in a single string", () => {
    const expected = "Hamburgers &lt; Pizza &lt; Tacos";
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toStrictEqual(expected);
  });
  it("should handle greater than symbols", () => {
    const expected = "Sixty &gt; twelve";
    expect(convertHTML("Sixty > twelve")).toStrictEqual(expected);
  });
  it("should handle quotation marks", () => {
    const expected = "Stuff in &quot;quotation marks&quot;";
    expect(convertHTML('Stuff in "quotation marks"')).toStrictEqual(expected);
  });
  it("should handle apostrophes", () => {
    const expected = "Schindler&apos;s List";
    expect(convertHTML("Schindler's List")).toStrictEqual(expected);
  });
  it("should handle different symbols in the same string", () => {
    const expected = "&lt;&gt;";
    expect(convertHTML("<>")).toStrictEqual(expected);
  });
  it("should return the original string if there are no symbols to be converted", () => {
    const expected = "abc";
    expect(convertHTML("abc")).toStrictEqual(expected);
  });
});

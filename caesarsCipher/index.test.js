const rot13 = require("./index");

describe("the rot13 function", () => {
  it("should decode a rot13 encoded string", () => {
    expect(rot13("SERR PBQR PNZC")).toStrictEqual("FREE CODE CAMP");
  });
  it("should handle punctuation", () => {
    expect(rot13("SERR CVMMN!")).toStrictEqual("FREE PIZZA!");
  });
  it("should handle punctuation", () => {
    expect(rot13("SERR YBIR?")).toStrictEqual("FREE LOVE?");
  });
  it("should handle long sentences", () => {
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toStrictEqual("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });
});

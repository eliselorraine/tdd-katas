const orbitalPeriod = require("./index");

describe("the orbital period function", () => {
  it("should fix spelling errors", () => {
    const test = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
    const expected = [{ name: "sputnik", orbitalPeriod: 86400 }];
    expect(test).toStrictEqual(expected);
  });
});

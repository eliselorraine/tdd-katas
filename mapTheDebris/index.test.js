const orbitalPeriod = require("./index");

describe("the orbital period function", () => {
  it("should fix spelling errors", () => {
    const test = orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
    const expected = [{ name: "sputnik", orbitalPeriod: 86400 }];
    expect(test).toStrictEqual(expected);
  });
  it("handle more than one object", () => {
    const test = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
    const expected = [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}];
    expect(test).toStrictEqual(expected);
  });
});

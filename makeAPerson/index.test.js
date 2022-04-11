const Person = require("./index");

describe("Person object", () => {
  const bob = new Person("Bob Ross");
  it("should have 6 methods", () => {
    expect(Object.keys(bob).length).toBe(6);
  });
  it("only allow access of methods through the object", () => {
    expect(bob instanceof Person).toBe(true);
  });
  it("only allow access of methods through the object", () => {
    expect(bob.firstName).toBe(undefined);
  });
  it("only allow access of methods through the object", () => {
    expect(bob.lastName).toBe(undefined);
  });
  it("only have a method that allows you to get the first name of the Person", () => {
    expect(bob.getFirstName()).toBe("Bob");
  });
  it("only have a method that allows you to get the last name of the Person", () => {
    expect(bob.getLastName()).toBe("Ross");
  });
  it("only have a method that allows you to get the full name of the Person", () => {
    expect(bob.getFullName()).toBe("Bob Ross");
  });
  it("only have a method that allows you to set the full name of the Person", () => {
    bob.setFullName("Haskell Curry");
    expect(bob.getFullName()).toBe("Haskell Curry");
  });
  it("only have a method that allows you to set the first name of the Person", () => {
    bob.setFirstName("Peter");
    expect(bob.getFirstName()).toBe("Peter");
  });
  it("only have a method that allows you to set the last name of the Person", () => {
    bob.setLastName("Tchaikovsky");
    expect(bob.getLastName()).toBe("Tchaikovsky");
  });
});

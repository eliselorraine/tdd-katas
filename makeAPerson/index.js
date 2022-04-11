const Person = function (firstAndLast) {
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = () => {
    const firstName = firstAndLast.split(" ")[0];
    return firstName;
  };
  this.getLastName = () => {
    const lastName = firstAndLast.split(" ")[1];
    return lastName;
  };
  this.setFirstName = (first) => {
    let original = firstAndLast.split(" ");
    original[0] = first;
    let updated = original.join(" ");
    firstAndLast = updated;
    return;
  };
  this.setLastName = (last) => {
    let original = firstAndLast.split(" ");
    original[1] = last;
    let updated = original.join(" ");
    firstAndLast = updated;
    return;
  };
  this.setFullName = (newName) => {
    firstAndLast = newName;
    return;
  };
  return firstAndLast;
};

module.exports = Person;

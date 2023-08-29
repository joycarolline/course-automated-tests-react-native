const helper = require("./helper.ex4");

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return helper.formatName(this.firstName, this.lastName);
  }
}

module.exports = User;

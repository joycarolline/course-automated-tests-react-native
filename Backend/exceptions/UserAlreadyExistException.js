const Exception = require("./Exception");

class UserAlreadyExistException extends Exception {
  constructor() {
    super(UserAlreadyExistException.name);
    this.httpStatusCode = 400;
    this.internalCode = "FK1";
  }
}

module.exports = UserAlreadyExistException;

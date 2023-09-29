class Exception extends Error {
  httpStatusCode = 500;
  internalCode = "FK0";
  message = "";

  constructor(className) {
    const dictionary = require(`./dictionaries/${className}.json`);
    const API_LANG = process.env.API_LANG ?? "en";
    const message = dictionary[API_LANG] ?? "Message not defined";

    super(message);

    this.message = message;
  }

  getHttpStatusCode() {
    return this.httpStatusCode;
  }

  getInternalCode() {
    return this.internalCode;
  }

  getErrorMessage() {
    return this.message;
  }
}

module.exports = Exception;

const jwt = require("jsonwebtoken");
const sign_token = require("../configs/sign_token");

const expiresIn = 60 * 60;

class JWTService {
  sign(payload) {
    return jwt.sign(payload, sign_token, { expiresIn });
  }
}

module.exports = JWTService;

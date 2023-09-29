const jwt = require("jsonwebtoken");
const sign_token = require("../configs/sign_token");

const verifyTokenMiddleware = (req, res, next) => {
  const token = req.query?.token ?? "";

  try {
    jwt.verify(token, sign_token);
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};

module.exports = verifyTokenMiddleware;

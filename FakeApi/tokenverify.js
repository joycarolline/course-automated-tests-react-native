const jwt = require("jsonwebtoken");

const SignToken = "okmcdasoimfsodosaodsmfosd";

const verifyToken = (req, res, next) => {
  const token = req.query?.token ?? "";

  try {
    jwt.verify(token, SignToken);
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};

module.exports = { verifyToken, SignToken };

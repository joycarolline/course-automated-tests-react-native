const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.query?.token ?? "";

  try {
    jwt.verify(token, "okmcdasoimfsodosaodsmfosd");
    next();
  } catch (err) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }
};

module.exports = verifyToken;

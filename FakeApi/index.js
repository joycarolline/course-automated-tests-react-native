const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const jwt = require("jsonwebtoken");
const verifyToken = require("./tokenverify");

const generateFakeNewsList = require("./fakenews");

const app = express();
const port = 7878;

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (email == "Admin" && password == "admin") {
    console.log("Login sucesso");

    const token = jwt.sign(
      {
        email: "admin",
      },
      "okmcdasoimfsodosaodsmfosd",
      { expiresIn: 60 * 60 },
    );

    res.status(200).json({
      token: token,
    });
    res.end();
    return;
  }

  console.log("Login com erro");

  res
    .status(401)
    .send({
      message: "Invalid credentials",
    })
    .end();
  return;
});

app.get("/api/fakenews", verifyToken, (req, res) => {
  const quantity = req.query?.quantity ?? 20;
  const token = req.query?.token ?? "";

  if (!token) {
    return res.status(401).send({
      message: "Invalid token",
    });
  }

  const fakeNewsList = generateFakeNewsList(quantity);

  return res.status(200).json(fakeNewsList);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const { verifyToken, SignToken } = require("./tokenverify");

const generateFakeNewsList = require("./fakenews");

const app = express();
const port = process.env.PORT || 7878;

app.use(bodyParser.json());

app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (email == "Admin" && password == "admin") {
    console.log("Login sucesso");

    const token = jwt.sign(
      {
        email: "Admin",
        name: "Turma Testes Automatizados RN",
        birthday: "1990-01-01",
      },
      SignToken,
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

  const fakeNewsList = generateFakeNewsList(quantity);

  return res.status(200).json(fakeNewsList);
});

app.get("/api/feature_toggle", verifyToken, (req, res) => {
  const toggle = true;

  return res.status(200).json({
    toggle: toggle,
  });
});

app.put("/api/user", verifyToken, (req, res) => {
  const { email, birthday, name } = req.body;

  console.log("Perfil Atualizado com Sucesso");

  const token = jwt.sign(
    {
      email: email,
      name: name,
      birthday: birthday,
    },
    SignToken,
    { expiresIn: 60 * 60 },
  );

  res.status(200).json({
    token: token,
  });
  res.end();
  return;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

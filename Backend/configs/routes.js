const { Router } = require("express");

// Middlewares
const verifyTokenMiddleware = require("../middlewares/VerifyTokenMiddleware");

// Controllers
const LoginController = require("../controllers/LoginController");
const FakeNewsController = require("../controllers/FakeNewsController");
const UsersController = require("../controllers/UsersController");
const RegisterController = require("../controllers/RegisterController");

const router = Router();
const loginController = new LoginController();
const fakeNewsController = new FakeNewsController();
const usersController = new UsersController();
const registerController = new RegisterController();

router.get(`/(|healthcheck)`, (_, res) => {
  console.log("Healthcheck");
  res.status(200).send({
    code: 200,
    message: "I'm alive 💓",
  });
});

// RegisterController
router.post("/api/register", registerController.store);

// LoginController
router.post("/api/login", loginController.store);

// FakeNewsController
router.get("/api/fakenews", verifyTokenMiddleware, fakeNewsController.all);

// UsersController
router.put("/api/users", verifyTokenMiddleware, usersController.update);

module.exports = router;

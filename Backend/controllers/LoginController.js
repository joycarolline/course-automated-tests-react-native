const LoginUseCase = require("../usecases/LoginUseCase");

class LoginController {
  constructor() {}

  async store(req, res) {
    const { email, password } = req.body;

    const loginUseCase = new LoginUseCase();

    const token = await loginUseCase.execute({ email, password });

    if (!token) {
      res
        .status(401)
        .send({
          message: "Invalid credentials",
        })
        .end();
      return;
    }

    res
      .status(200)
      .json({
        token: token,
      })
      .end();

    return;
  }
}

module.exports = LoginController;

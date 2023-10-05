const RegisterUseCase = require("../usecases/RegisterUseCase");
const UsersRepository = require("../repositories/UsersRepository");

class RegisterController {
  async store(req, res, next) {
    try {
      const { name, email, password, birthday } = req.body;

      const userRepository = new UsersRepository();
      const useCase = new RegisterUseCase({ userRepository });

      res
        .status(201)
        .send(await useCase.execute({ name, email, password, birthday }));

      res.end();

      return;
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RegisterController;

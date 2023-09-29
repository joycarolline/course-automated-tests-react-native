const UpdateUserProfileUseCase = require("../usecases/UpdateUserProfileUseCase");

class UsersController {
  async update(req, res) {
    const { email, birthday, name } = req.body;

    const token = await new UpdateUserProfileUseCase().execute({
      email: email,
      birthday: birthday,
      name: name,
    });

    res.status(200).json({
      token: token,
    });

    res.end();
    return;
  }
}

module.exports = UsersController;

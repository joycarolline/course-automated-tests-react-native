const JWTServices = require("../services/JWTService");
const UsersRepository = require("../repositories/UsersRepository");

class UpdateUserProfileUseCase {
  async execute({ email, birthday, name }) {
    const result = await new UsersRepository().updateProfileByEmail(email, {
      name: name,
      birthday: birthday,
    });

    console.log(result);

    const token = new JWTServices().sign(result);

    console.log("Perfil Atualizado com Sucesso");

    return token;
  }
}

module.exports = UpdateUserProfileUseCase;

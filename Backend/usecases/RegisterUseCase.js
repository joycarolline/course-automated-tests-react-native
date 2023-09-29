const UserAlreadyExistException = require("../exceptions/UserAlreadyExistException");

class RegisterUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(user) {
    const userExists = await this.userRepository.getUserByEmail(user.email);

    if (userExists) {
      throw new UserAlreadyExistException();
    }

    return this.userRepository.save(user);
  }
}

module.exports = RegisterUseCase;

const fakeNewsRepository = require("../repositories/FakeNewsRepository");

class FakeNewsListAllUseCase {
  constructor() {
    this.repository = new fakeNewsRepository();
  }

  async execute() {
    const getAll = await this.repository.getAllFakeNews();
    console.log(getAll);
    return getAll;
  }
}

module.exports = FakeNewsListAllUseCase;

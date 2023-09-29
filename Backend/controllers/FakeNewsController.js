const FakeNewsListAllUseCase = require("../usecases/FakeNewsListAllUseCase");

class FakeNewsController {
  constructor() {}

  async all(req, res) {
    const { email, password } = req.body;

    const fakeNewsListAllUseCase = new FakeNewsListAllUseCase();

    const listAll = await fakeNewsListAllUseCase.execute();

    res.status(200).json(listAll).end();

    return;
  }
}

module.exports = FakeNewsController;

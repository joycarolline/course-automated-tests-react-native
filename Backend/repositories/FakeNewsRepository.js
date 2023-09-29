const database = require("../configs/database");

class FakeNewsRepository {
  async getAllFakeNews() {
    return database.run(async (client) => {
      return client
        .db("fakedb")
        .collection("fakenews")
        .find()
        .limit(5)
        .toArray((err, doc) => {
          return doc;
        });
    });
  }
}

module.exports = FakeNewsRepository;

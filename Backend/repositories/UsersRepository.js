const database = require("../configs/database");

class UsersRepository {
  async getUserByEmail(email) {
    return database.run(async (client) => {
      return client.db("fakedb").collection("users").findOne({ email: email });
    });
  }

  async updateProfileByEmail(email, { name, birthday }) {
    const filter = { email: email };

    return database.run(async (client) => {
      return client
        .db("fakedb")
        .collection("users")
        .updateOne(filter, {
          $set: {
            name: name,
            birthday: birthday,
          },
        });
    });
  }

  async save(user) {
    console.log("Saving user: ", user);
    return database.run(async (client) => {
      return client.db("fakedb").collection("users").insertOne(user);
    });
  }
}

module.exports = UsersRepository;

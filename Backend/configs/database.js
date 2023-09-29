const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = "mongodb://root:root@mongodb:27017/";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(callback) {
  try {
    await client.connect();
    await client.db("fakedb").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
    if (typeof callback === "function") {
      console.log(" > Running Callback");
      return callback(client);
    }
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

module.exports = { run };

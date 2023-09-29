const express = require("express");
const bodyParser = require("body-parser");
const Exception = require("./exceptions/Exception");

// Configs
const database = require("./configs/database");
const routes = require("./configs/routes");

// Setup
const app = express();
const port = process.env.PORT || 7878;

// Middlewares
app.use(bodyParser.json());
app.use(routes);

app.use((err, req, res, next) => {
  if (err instanceof Exception) {
    return res.status(err.getHttpStatusCode()).send({
      code: err.getInternalCode(),
      message: err.getErrorMessage(),
    });
  }

  res.sendStatus(500);
  next(err);
});

app.listen(port, () => {
  database.run().catch(console.error);
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

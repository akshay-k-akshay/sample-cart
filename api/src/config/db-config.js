const { connect, connection } = require("mongoose");

const { config } = require("./app-config");
const { logger } = require("./winston");

// dbUrl
const dbUrl = config.get("db.url");

module.exports = {
  dbConfig: () => {
    connect(`${dbUrl}`, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    connection.on("connected", function () {
      logger.info(`DB has been connected to ${dbUrl}`);
    });
  }
};

const llaves = require("./config.js");
module.exports = {
  database: {
    host: llaves.DATABASE_HOST,
    user: llaves.DATABASE_USER,
    password: llaves.PASSWORD,
    database: llaves.DATABASE_NAME,
    port: llaves.PORT,
    dateStrings: true,
    timeout: 60 * 60 * 1000,
  },
};

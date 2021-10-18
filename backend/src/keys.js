const llaves = require("./config");
module.exports = {
    database: {
        host: llaves.DATABASE_HOST,
        user: llaves.DATABASE_USER,
        password: llaves.PASSWORD,
        database: llaves.DATABASE_NAME,
        port: llaves.PORT,
        dateStrings: true,
    },
};

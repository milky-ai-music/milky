const mariadb = require('mysql');

require('dotenv').config();

const conn = mariadb.createConnection(
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWD,
        database: process.env.DB_NAME
    }
);

module.exports = conn;
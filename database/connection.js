const mysql = require("mysql2");

const dotenv = require("dotenv")

dotenv.config({path : "config/config.env"})

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASENAME
});

module.exports = pool.promise();
const { config } = require("dotenv");
config()

module.exports = {
    db: {
        user: process.env.DB_USER,
        password: procces.env.DB_PASSWORD,
        host: procces.env.DB_HOST,
        port: procces.env.DB_PORT,
        database: process.env.DB_DATABASE
    }
}
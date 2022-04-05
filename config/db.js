const Pool = require("pg").Pool;
const config = require("config");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "api",
  password: config.get("passwordDb"),
  port: 5432,
});

module.exports = pool;

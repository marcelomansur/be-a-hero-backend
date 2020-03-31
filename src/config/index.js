const dotenv = require("dotenv");

dotenv.config({ path: "src/config/.env" });

module.exports = {
  port: process.env.PORT || 3333,
  dbtype: process.env.DB_TYPE,
  dbhost: process.env.DB_HOST,
  dbname: process.env.DB_NAME,
  dbport: process.env.DB_PORT,
  dbuser: process.env.DB_USER,
  dbpass: process.env.DB_PASS
};

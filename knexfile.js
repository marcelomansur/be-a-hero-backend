// Update with your config settings.
const config = require("./src/config");

module.exports = {
  test: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/test.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/db.sqlite"
    },
    migrations: {
      directory: "./src/database/migrations"
    },
    useNullAsDefault: true
  },

  staging: {
    client: config.dbclient,
    connection: {
      host: config.dbhost,
      database: config.dbname,
      port: config.dbport,
      user: config.dbuser,
      password: config.dbpass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations"
    }
  },

  production: {
    client: config.dbclient,
    connection: {
      host: config.dbhost,
      database: config.dbname,
      port: config.dbport,
      user: config.dbuser,
      password: config.dbpass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations"
    }
  }
};

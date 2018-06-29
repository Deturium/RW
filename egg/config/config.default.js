'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1530273650838_5435';

  // add your config here
  config.middleware = [];

  config.static = {
    prefix: "/",
  };

  config.sequelize = {
    dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
    database: 'rw',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '314159',
    define: {
      timestamps: false
    }
  };

  return config;
};

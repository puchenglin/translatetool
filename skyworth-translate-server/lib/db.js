const Sequelize = require('sequelize');
const config = require('../config/default.js')

/** 
 * 建立数据库连接
*/
const sequelize = new Sequelize(
  config.database.DATABASE,
  config.database.USERNAME,
  config.database.PASSWORD,
  {
    host: config.database.HOST,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
);

module.exports = sequelize;
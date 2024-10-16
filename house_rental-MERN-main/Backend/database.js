const Sequlize = require('sequelize');
require('dotenv').config();


user = process.env.DB_USERNAME;
password = process.env.DB_PASSWORD;

const sequelize = new Sequlize("sql12738235", user, password, {
     host: 'sql12.freesqldatabase.com',
   //host: 'localhost',
    dialect: "mysql",
    logging: false,
    timezone: '+05:30'
}) 


module.exports = sequelize
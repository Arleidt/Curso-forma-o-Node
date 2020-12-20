const Sequelize = require('sequelize');
const connection = new Sequelize('guiadeperguntas', 'root', '56697989',{
  host: 'localhost',
  dialect: 'mysql'
});
module.exports = connection;
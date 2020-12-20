const Sequelize = require('sequelize');
const connection = require('./database');
//Definindo Model
const Pergunta = connection.define('perguntas', {
  //Campos - nome do campo e o tipo dele
  titulo: {
    type: Sequelize.STRING, //textos curtos
    allowNull: false
  },
  descricao: {
    type: Sequelize.TEXT, //textos longos
    allowNull: false
  }
});//Define nome da tabela
//Sicronizar com banco de dados se não tiver tab ele vai criar
Pergunta.sync({ force: false }).then(() => {
  console.log('Tabela criada');
});//force caso tab exista ele n vai forçar
module.exports = Pergunta; 
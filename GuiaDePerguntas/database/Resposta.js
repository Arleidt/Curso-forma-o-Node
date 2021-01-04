const Sequelize = require('sequelize');
const connection = require('./database');
//Definindo Model e tabela resposta
const Resposta = connection.define("respostas", {
  //relacionamento cru, associação
  corpo:  {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
});
//Sicronizar com BD
Resposta.sync({ force: false}).then(() => {
  console.log('Tabela Respostas criada');
});//force caso tab exista ele n vai forçar 
//Utilizar model fora do arquivo
module.exports = Resposta;
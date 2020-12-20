const express = require("express"); //import modulo
const app = express(); //recebe express na var app
const bodyParser = require("body-parser");// import bodyParser, biblioteca pegar dados formulario
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");
//database com promisse se sucesso executa o then. Se acontecer erro é o catch
connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!")
  })
  .catch((msgErro) => {
    console.log(msgErro);
  })
/**
 * motor de html ejs
 * Passando para o express(usar) que a view engine é a linguagem de modelagem ejs,
 * que permite gerar marcação HTML com JavaScript simples.
 */
app.set("view engine", "ejs");
/**
 * arquivos estaticos, não são processados no backend
 * css - js do frontend - img - arq de dados etc
 * Passando para o express(usar) arquivos estáticos, com nome da pasta onde vai
 * ficar os arquivos estáticos. Padrão mercado o 'public'.
 */
app.use(express.static('public'));
/**
 * comando vai permitir que envie dados do formulário
 * e o bodyParser vai traduzir esses dados em uma estrutura javascript
 * urlencoded vai decodificar dados enviados pelo formulário.
 */
//BodyParser disponibiliza objeto req.body
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json()); //Permite ler dados de formulários enviados via json
//Rotas
app.get("/", function (req, res) {//criando rota com resposta
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", function (req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  res.send("Formulário Recebido! título " + titulo + " descricao " + descricao);
});

app.listen(5000, function (error) {//rodar aplicação
  if (error) {
    console.log("Erro ao Iniciar o Servidor!")
  } else {
    console.log("App Rodando!")
  }
})
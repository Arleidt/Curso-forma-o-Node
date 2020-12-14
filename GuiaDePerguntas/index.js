const express = require("express"); //import modulo
const app = express(); //recebe express na var app
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

app.get("/", function(req, res){//criando rota com resposta
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
})

app.listen(5000, function(error){//rodar aplicação
  if(error){
    console.log("Erro ao Iniciar o Servidor!")
  }else{
    console.log("App Rodando!")
  }
})
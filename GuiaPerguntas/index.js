const express = require("express"); //import modulo
const app = express(); //recebe express na var app
/**
 * motor de html ejs
 * Passando para o express(usar) que a view engine é a linguagem de modelagem ejs,
 * que permite gerar marcação HTML com JavaScript simples.
 */
app.set("view engine", "ejs");

app.get("/:nome", function(req, res){//criando rota com resposta
  var nome = req.params["nome"];
  var lang = "JavaScript";
  res.render("index.ejs", {
    nome : nome,//Passando valores para html
    lang : lang,
    idade : 31,
    empresa : "Compasso UOL"
  })//vai desenhar arquivo index.ejs render olha automaticamente na pasta views
});

app.listen(5000, function(error){//rodar aplicação
  if(error){
    console.log("Erro ao Iniciar o Servidor!")
  }else{
    console.log("App Rodando!")
  }
})
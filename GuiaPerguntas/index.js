const express = require("express"); //import modulo
const app = express(); //recebe express na var app
/**
 * motor de html ejs
 * Passando para o express(usar) que a view engine é a linguagem de modelagem ejs,
 * que permite gerar marcação HTML com JavaScript simples.
 */
app.set("view engine", "ejs");

app.get("/:nome/:lang", function(req, res){//criando rota com resposta
  var nome = req.params["nome"];
  var lang = req.params.lang;
  var exibirMsg = false;

  var produtos = [ //array de obj produtos
    {nome : "Doritos", preco : 3.14},
    {nome : "Coca Cola", preco : 5},
    {nome : "Leite", preco : 1.45},
    {nome : "Carne", preco : 20},
    {nome : "RedBull", preco : 6},
    {nome : "Nescau", preco : 4}
  ]

  res.render("index.ejs", { //obj
    nome : nome,//Passando valores para html
    lang : lang,
    idade : 31,
    empresa : "Compasso UOL",
    msg: exibirMsg,
    produtos : produtos
  })//vai desenhar arquivo index.ejs render olha automaticamente na pasta views
});

app.listen(5000, function(error){//rodar aplicação
  if(error){
    console.log("Erro ao Iniciar o Servidor!")
  }else{
    console.log("App Rodando!")
  }
})
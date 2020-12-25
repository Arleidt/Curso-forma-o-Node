const express = require("express"); //import modulo
const app = express(); //recebe express na var app
const bodyParser = require("body-parser");// import bodyParser, biblioteca pegar dados formulario
const connection = require("./database/database");
const Pergunta = require("./database/Pergunta");//Import model pergunta
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
  /**metodo findAll busca todas as perguntas da tabela. .then recebe lista perguntas e 
   * quando estiver pronta manda para dentro do then (raw true faz um pesquisa 
   * crua pelos dados. Só os dados e nada mais)*/
  Pergunta.findAll({raw: true, order:[ //atributo order que recebe um array
    ['id', 'DESC'],// ordem de ordenaçao outro array que ordena por id e decrescente
  ]}).then(perguntas => {
    res.render("index", { //abrindo json e passando perguntas
      perguntas: perguntas
    });
    console.log(perguntas);
  })
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", function (req, res) {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  Pergunta.create({//create metodo responsavel salvar BD dentro da tabela - (import model- e model met create)
    titulo: titulo,
    descricao: descricao
  }).then(() => {//fazer alguma coisa após pergunta ser criada salva no bd
    res.redirect("/");
  })

  res.send("Formulário Recebido! Título: " + titulo + " Descricao: " + descricao);
});

app.get("/pergunta/:id", (req, res) => {
  var id = req.params.id;//pega id digitado na rota
  Pergunta.findOne({//Chamando o model Pergunta//met sequelize busca um dado findOne(CONSULTA CONDIÇAO);
     where: {id: id} //obj json dentro de outro json {nomecampopesquisar : valorcomparar} where p/fazer busca atraves de condicoes
  }).then(pergunta => {//then funcao rodada apos pesquisa, pergunt.find manda model pesquisar no banco por id se achar chama o then e passar pergunta pra ele
     if(pergunta != undefined){//caso n achar pergunta ele vai chamar then da mesma forma e vai vir var nula. Verificação if.
      //pergunta achada 
      res.render("pergunta");//exibir pagina pergunta.ejs
     }else{ // Não encontrada
      res.redirect('/'); //Não encontrada redireciona pagina principal.
     }
  })
})

app.listen(5000, function (error) {//rodar aplicação
  if (error) {
    console.log("Erro ao Iniciar o Servidor!")
  } else {
    console.log("App Rodando!")
  }
})
<<<<<<< HEAD
var calculadora = require("./calculadora");

console.log(calculadora.nome);
console.log(calculadora.soma(10,20));
var resultado = (calculadora.mult(20,10));
var resultsub = (calculadora.sub(40,20));
console.log(calculadora.div(10,20));
console.log(resultado);
console.log(resultsub);
console.log(calculadora.soma(10,30));





/*var mostrarSite = true;
const site = "www.google.com.br"
console.log("Hello World!");
console.log("Meu nome é Arlei");
console.log("E estou estudando Node.js");

if(mostrarSite){
  console.log(site);
}**/
=======
//chamando o módulo http do núcleo do node e passando para a var http
//localhost:8181 nada acontece precisa passar alguma coisa function req res
//http requisição e o server da uma resposta

var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("<h1>Bem vindo ao meu Site</h1><h4>google.com.br</h4>")

}).listen(8181);
    console.log("Meu primeiro servidor rodando");
>>>>>>> 8f91f4c... create http

//chamando o módulo http do núcleo do node e passando para a var http
//localhost:8181 nada acontece precisa passar alguma coisa function req res
//http requisição e o server da uma resposta

var http = require("http");

http.createServer(function(requisicao, resposta) {
    resposta.end("<h1>Bem vindo ao meu Site</h1><h4>google.com.br</h4>")

}).listen(8181);
    console.log("Meu primeiro servidor rodando");


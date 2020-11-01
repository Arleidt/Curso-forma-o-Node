const express = require('express');//importando express
/**
 * const app
 * 
 * funcao express() que vai carregar todo o framework dentro da variavel app
 * recebe uma instancia/copia do express em uma var const que chamei de app
*/
const app = express();
/**
 * criando rota
 * primeira rota inicial get
 * function o que essa rota faz.
 * toda rota criada temos que devolver uma resposta 
 * ".send(enviar)"
 */
app.get('/', function (requisicao, resposta){
    resposta.send("Bem vindo ao Primeiro Servidor Node.js");
});

app.get('/blog', function (req, resp){
    resp.send("Bem vindo ao meu Blog!")
});

/**
 * metodo listen 
 * com função que é chamada sempre que o servidor é iniciado
 * com parametro error, se ocorrer um erro imprime mensagem
 */
app.listen(5000,function(error){
    if(error){
        console.log("Ocorreu um erro ao iniciar o servidor!");
    }else{
        console.log("Servidor Iniciado com sucesso!")
    }  
});
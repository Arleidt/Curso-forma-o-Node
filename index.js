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

app.get('/canal', function (req, resp){
    resp.send("<h1>Bem vindo ao meu Canal!</h1>")
});
/**
 * rota com parametro /:
 * posso ter N parametros /:nome/:sobrenome
 * req  requisicao dados enviados pelo usuario
 * res resposta enviada para o usario
 */
app.get('/usuario/:nome', function (req, resp){
    resp.send(req.params.nome)
});
app.get('/user/:nome/:sobrenome', function (req, resp){
    var nome = req.params.nome
    var sobrenome = req.params.sobrenome
    resp.send("<h1>Olá  "+ nome +" "+sobrenome +" Bem Vindo!</h1>");
});
/**
 * parametro com ? torna o parametro opcional
 * posso acessar a rota sem passar o parametro
 * :videos?
 */
app.get('/canais/:videos?', function (req, resp){
    var canais = req.params.videos
    if(canais){
        resp.send("<h1>Bem vindo ao videos "+canais+" </h1>");

    }else{
        resp.send("<h1>Bem vindo aos meus canais!</h1>")
    }
});
/**
 * query params
 * forma dinamica não coladas na rota
 * nao definidas na rota videos/youtube?canal=guiaprogramador
 */
app.get('/canal/youtube', function (req, resp){
    var canal = req.query["canal"];
    if(canal){
        resp.send(canal); 
    }else{
        resp.send("Nenhum Canal Fornecido!");     
    };
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
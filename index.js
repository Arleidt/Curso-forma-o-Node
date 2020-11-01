const express = require('express');//importando express
/**
 * const app
 * 
 * funcao express() que vai carregar todo o framework dentro da variavel app
 * recebe uma instancia/copia do express em uma var const que chamei de app
*/
const app = express();
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
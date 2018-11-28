// Programação orientada a objeto e Classes e Métodos \\

/* 

Classe = conjunto de atributos e métodos; 

Atributo = informação armazenadas; 

Método = ações;

*/

 /* "let calculator = new calculadora" 
 
 A variável Calculator passa agora a ter uma representação em forma de objeto, ou seja, 
 a variável se torna uma instância da classe calculadora. New é a palavra mágica para isso ser possível 
*/

let cellphone = function(){

    this.cor = "prata";
    
    this.ligar = function()
    {
           console.log("uma ligação");  

    }
    
    
 }


let objeto = new cellphone();

console.log(objeto.cor);
console.log(objeto.ligar());



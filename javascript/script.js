var a;
a = "texto aleatório";
console.log(a);


//tipos de dados 
//boolean 
//null
//undefined
//string
//numero

/* outro tipo de comentario  */

var tipo = "1";
console.log(tipo);
var numero = 1;
console.log(numero);

console.log(tipo+numero);
console.log(numero+numero)

//Operadores aritimeticos
/*
+ adicão
- subtração
* Multiplicação
/ divisão
% módulo
++ incremento 
-- decremento 
*/

// bloco de comandos = {...} no java vc precisa colocar as chaves qnd tem mais e uma linha de comando 

//condicionais
var idade = 17 ;

if (idade >= 18)
    console.log("pode")
else
    console.log("Não pode")

    ///usando bloco de codigo

var idade = 17 ;

if (idade >= 18){
    console.log("pode")
    console.log("Qual seu pedido ")
    }

else if(idade >=18){
    console.log("pode")
    console.log("mostre a identidade")
}

else{
   console.log("Não pode")
   console.log("volte futuramente")
   }
    
   //usando combinadores &&, serve para ou tmb (||)
   
   var idade = 17 ;

if (idade >= 18 && idade <= 77){
    console.log("pode")
    }

else{
   console.log("Não pode")
   console.log("volte futuramente")
   }
    // operadore ternário

    var idade =  17;

    idade >= 18 ? console.log("pode") :console.log("nao pode");

    var pode = idade >=18 ? true : false;
    console.log(pode)
    
    
    
    





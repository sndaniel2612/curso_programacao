var nota1 = 8.0;

var nota2 = 5.8;

var media = (nota1 + nota2) / 2;

var conceito = ""

if (media >= 7) {
    conseito = "otimo";
    console.log("voce passou com média = " + media);
    console.log(conceito);
}
else if (media >= 5) {
    conceito = "bom";
    console.log("voce passou com média = " + media)
    console.log(conceito);
}
else {
    conceito = "regular"
    console.log("suna nota " + media + " nao foi suficiente para passar")
    console.log(conceito);

}

//SWITCH (break serve para parar o switch no caso de achar a alternatica que interessa)

switch (conceito) {

    case "otimo":
        console.log("Parabens , voce é um execelente aluno")
        break;
    case "bom":
        console.log("Coniue assim esta melhorando ")
        break;
    case "regualar":
        console.log("Estude mais um pouco ")
        break;
    default:
        console.log("houve algum erro")
        break;
}

// for and while

//for

var i = 5;
for (var vez = 0; vez < i; vez++) {
    console.log("executando log: " + vez)
    console.log("acabou!!!!!")
}

//while

var i = 5;

while (i < 10) {
    console.log("o Número é: " + i);
    i++;
}

console.log("acabou!!")

//arrays
//primeira forma de criar uma array inseção manual de dados e modelo menos comum de estrutura
//[] pega a posição dentro do array e começa no 0 o indice de array 
var vetor = new Array("iogor", "jose", "marcos", "daniel");

console.log(vetor[3]);

// segunda forma de criação de array

var vetor = ["iogor", "jose", "marcos", "daniel"]

console.log(vetor)

for (var i = 0; i < vetor.length; i++) {
    console.log(vetor[i])
}

// in pega o indice array 
for (var i in vetor) {
    console.log(i)
}

//of pega o valor do indice da array
for (var i of vetor) {
    console.log(i)
}

// funções

function mediaNota() {
    var nota1 = 10;
    var nota2 = 8;
    var media = (nota1 + nota2) / 2;
    console.log(media);
}

mediaNota();

//expandindo conhecimento
function mediaNota_2(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    //console.log(media);
    return(media)
}

var resultado1 = mediaNota_2(6,7);
var resultado2 = mediaNota_2(10,5);

console.log(resultado1, resultado2);

// segunda aula de funções

function saudacao() {
    return "olá mundo " 
}

//atribuindo a funcção a uma variavel
var s = saudacao
console.log(s());

///exemplificando 

function mediaNota_2(n1,n2) {
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    return(media)
}

var resultado1 = mediaNota_2(6,7);

var m = mediaNota_2;

var resultado2 = m(10,5);

console.log(resultado1, resultado2);

//funcao anonima

var media = function (n1,n2){
    return (n1+n2)/2;
}

console.log(media(5,6));

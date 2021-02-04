// juntando conhecimento ate aqui 
//saida esperada o nome do aulo, nota  1 , nota 2, media e testo de complemento 

var nomes = ["daniel", "aline","noah"];
var n1 = [7,8,10];
var n2 = [8,8.5,9.5];

function media(n1,n2){
    return (n1 + n2)/2;
}

function result(media){
    resultado = "reprovado"

    if (media> 7) {
        resultado = "aprovado"
    }
    return resultado 
}


for (var index in nomes){

    var not1 = n1[index];
    var not2 = n2[index];
    var med = media(not1,not2)
    var status = result(med);

    console.log(nomes[index]
        + " - " +
        not1
        + "- " +
        not2
        + " - " +
        med
        + " - " +
        /*result(med)*/
        status
        );
        
}

//objetos

var obj = { nome:"igor" , 
             nota: [7.8, 5.0]
            }

console.log (obj.nome)
console.log(obj["nome"])
console.log(obj.nota[1])


//colocando propriedades no obje depois de criado 

obj.matricula = 123546

obj["sobrenome"] = "olibveira"

console.log(obj)

var novaprop = "Lastname"

obj[novaprop] = "oliveira"

console.log(obj)

//metodos (objetos com funções)

var obj2 ={
    nome:"igor",
    notas: [5,8],
    media: function(n1,n2){
        return(n1 + n2)/2
    }
}

console.log(obj2.nome)
console.log(obj2.media(obj2.notas[0], obj2.notas[1]))

///atribuindo a media a uma funcao
//this traz a referencia direta do objeto dentro do contexto para a obketo pai 
media = function(){
    return(this.n1 + this.n2)/2


var obj2 ={
    nome:"igor",
    notas: [5,8],
    media
    }
}


console.log(obj2.nome)
console.log(obj2.media(obj2.notas[0], obj2.notas[1]))

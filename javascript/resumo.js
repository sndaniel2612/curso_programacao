var calcMedia = function(){
    return(this.nota1+this.nota2)/2
}

var turma =[
    {nome: "igor",
    nota1:9,
    nota2:7,
    media: calcMedia
    },
    {
    nome:"Joao",
    nota1:4,
    nota2:3,
    media:calcMedia
    }
]

var aluno = turma[0]
console.log (aluno)
console.log(aluno.media())


////Expandindo 

function criarAluno(nome, n1 , n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1+this.nota2)/2
        }

    }

}

var turma = [
    criarAluno("Igor",9,6),
    criarAluno("Joao",7,4),
    criarAluno("Aline", 7,70)

]

turma.forEach(function(elemento){
    console.log(elemento)
})

///expandindo 

function aluno2 (nome, n1 , n2) {
this.nme = nome
this.nota1 = n1
this.nota2 = n2
this.media = function() {
        return(this.nota1+this.nota2)/2
    }
}

var a  = new aluno2("IGOR",8,7)

var b  = new aluno2("JOAO",6,7)

console.log(a)
console.log(a.media())

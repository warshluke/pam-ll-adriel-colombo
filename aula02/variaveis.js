let num1 = 2
const num2 = 4
var msg = "Olá amigos! Esse é o número:"
console.log(msg + num1) //usado para saber o que está aconecendo, ele mostra coisas dentro do console lll para usar mais de um arquivo, usa-se virgula(tem já um espaço) ou +(não vem com espaço)
console.log(num1 + num2)//se você tiver 2 números e usar o +, ele vai somar
console.log(typeof num1)//typeof diz o tipo da variavel
console.log(typeof msg)

// JSON - JavaScripit Object Notation

let usuario = {
    nome: "João",
    idade: 35,
    signo: "Escorpião",
    calvo: true
}

console.log(typeof usuario)
console.log(usuario.nome, "\nidade:", usuario.idade)
console.log(typeof usuario.calvo)

const nomes = ["João", "Oãoj"]
console.log(nomes)
console.log(typeof nomes)
console.log(nomes[1])
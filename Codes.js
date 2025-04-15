// * Multiplicação
// / Divisão
// + Soma
// - Subtração
// % Resto da divisão


let lado = 2

let area_quadrado = lado * lado

console.log(area_quadrado)

/* Losango
*/

let Dzao = 4
let dzinho = 2

let diagonal_losango = Dzao * dzinho / 2

console.log(diagonal_losango)

/* circulo
*/

let pi = 3.14
let raio = 2

let area_circulo = pi * (raio * raio)

console.log(area_circulo)

/* media
*/

let resultado1 = 4
let resultado2 = 4
let resultado3 = 12.56

let media = (resultado1 + resultado2 + resultado3) / 3

console.log(media)

/* Conversor de temperatura


let Tf = 9*Tf/5 + 32
let Tc = 5*(Tf - 32)/9

/*
*/

let peso = 160
let altura = 1.72
let imc = peso / (altura * altura)
console.log(imc)

/*
*/

let nota = 9 
let nota2 = 7
let nota3 = 3

if (nota >= 7 && nota2 >= 7 && nota3 >= 7) {
    console.log("Aprovado")
}
else if (nota >= 5 && nota2 >= 5 && nota3 >= 5) {
    console.log("Recuperação")
}

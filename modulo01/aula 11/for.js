
let num = [10, 20, 30, 40, 50] // length

// Loops definidos.

for(let i=0; i<num.length; i++){
    // console.log(num[i])
}

// FOR OF é mais simples e rápido para iterar os elementos.
for(i of num){
    // console.log(i)
}

// FOR IN pega as posições.
for(i in num){
    // console.log(i)
}

// WHILE é um loop de repetição garalmente usado 
// quando não se sabe quantas vezes tera que ser iterado.

let n1 = 10
while(n1 < 10){
    // console.log("CBF CURSOS")
    n1++
}
// console.log("Fim do programa")

// DO WHILE mesmo que a condição lógica seja falsa
// executa o programa pelo menos uma vez.

let n2 = 10
do{
    // console.log("CBF CURSOS")
    n2++
}while(n2 < 10)

// console.log("Fim do programa")

// BREAK: quando o loop encontra break ele 
//      para o loop imediatamente.

// CONTINUE: quando o loop encontra continue 
// ele pula e continua.

let num3 = 0
const max = 1000
let pares = 0

for(let i = num3; i < max; i++){
    if(i % 2 != 0){
        continue
    }
    pares++
}

// console.log("A quantidade de pares é: " + pares)

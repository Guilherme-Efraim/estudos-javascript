
let num = [10, 20, 30, 40, 50] // length

// Loops definidos.

for(let i=0; i<num.length; i++){
    // console.log(num[i])
}

// FOR OF é mais simples e rápido para iterar os elementos.
for(i of num){
    console.log(i)
}

// FOR IN pega as posições.
for(i in num){
    // console.log(i)
}
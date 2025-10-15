// Número primo: 
//    Implemente uma função que verifique se um número 
//    é primo e retorne true se for e false se não for.  

// Definição: Um número primo é um número natural
// maior que 1 que possui apenas dois divisores: 1 e ele mesmo. 

// function numPrimo(numero){
//     if(numero < 1 || numero % 1 > 0 && numero % numero > 0){
//         return "Este número não é primo"
//     } else if(resto === 0 && numero > 1){
//         let resto = numero % numero
//         return "o valor, ${numero}, é primo" 
//     }
// }

// console.log(numPrimo(9))

function numPrimo01(numero){
    if(numero > 1 && numero % numero === 0 && numero % 1 === 0){
        return `O número ${numero}, é primo`
    } else {
        return "Este número não é primo"
    }
}

// console.log(numPrimo01())

// FORMA CORRETA segundo a ia.

function numFatorial(numero){
    if(numero <= 1){
        return false
    }
    for(let i = 2; i <= Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false
        }
    }
    return true
}

// console.log(numFatorial(1))




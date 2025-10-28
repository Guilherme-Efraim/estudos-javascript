// Sequência de Fibonacci: 
//     Desenvolva uma função fibonacci. A sequência de Fibonacci é uma sequência numérica 
//     onde cada número é a soma dos dois anteriores, começando geralmente por (0) e (1)
//     (0, 1, 1, 2, 3, 5, 8, ...).

function secFibonacci(numero){
    if(numero <= 1){
        return numero;
    }

    let a = 0
    let b = 1

    for(let i = 2; i <= numero; i++){
        let temp = b;
        b = a + b;
        a = temp
    }
    return b;
}

console.log(secFibonacci(10))

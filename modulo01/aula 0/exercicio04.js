/*
Fatorial de um número: 
    Crie uma função para calcular o fatorial de um número inteiro fornecido pelo usuário. 
    O fatorial de um número \(n\) é o produto de todos os inteiros positivos menores ou igual a \(n\), 
    representado como \(n!\). 
*/

function numFatorial( numero ){

    if(numero < 0){
        return "Números negativos não são suportados."
    } else if(numero === 0 || numero === 1){
        return 1
    } else {
        let fatorial = 1;
        for(let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
}

console.log(numFatorial(5))
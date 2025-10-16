// Contar vogais em uma string: 
//     Escreva uma função que conte e retorne o número de vogais em uma string fornecida pelo usuário.  

function numVogais(str){
    const minuStr = str.toLowerCase().split();
    const vogais = "aeiou"
    let contador = 0

    for(i of minuStr){
        if(vogais.includes(minuStr)){
        }
        return contador;
    }
}

console.log(numVogais("Olá Mundo"))
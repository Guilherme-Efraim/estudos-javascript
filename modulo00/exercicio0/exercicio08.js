// Contar vogais em uma string: 
//     Escreva uma função que conte e retorne o número de vogais em uma string fornecida pelo usuário.  

function numVogais(str){
    let contador = 0
                                // const contador = str.length; // aqui está guardando apenas o tamanho da string, não a string.
    for(let l of str){          // aqui for in não pode iterar os caracteres de uma string.
        const vogais = "aeiou"
        if(vogais.includes(l)){
            contador++;
        }
    }
    if(contador >= 1){
        return `Tem ${contador} vogais.`
    } else {
        return "Não tem vogal"
    }
}

console.log(numVogais("guilherme"))
// Verificar palíndromo: 
//     Crie uma função que receba uma string e retorne true se for um palíndromo 
//     (lê-se da mesma forma de frente para trás) e false caso contrário. Ignore maiúsculas e minúsculas.


function palindromo(str){
    const stringLimpa = str.replace(/\s/g,'').toLowerCase();
    const stringInvertida = stringLimpa.split('').reverse().join('');
    if(stringLimpa === stringInvertida){
        return "É palíndromo"
    } else {
        return "Não é um palíndromo"
    }
}

console.log(palindromo("arara"))
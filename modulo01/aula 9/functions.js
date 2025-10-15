/*
Functions / Funções

    - Trecho de código que é executado
    somente quando solicitado
    
    - Trecho de código que pode ser Reutilizado varias vezes

- Função VOID (vazia)
- Função com parâmetros
- Função Return
- Arrow Function

*/

/*Função void*/

function digaMeuNome01(){
    const name = 'Rodolfo' 
    console.log(name)
}

/*Função com parâmetros*/

function soma(numero1, numero2){
    const resultado = numero1 + numero2
    console.log(resultado)
}

 /*Função return*/

function estaEndividado(renda, gasto){
    if (renda > gasto) {
        return 'Está no azul'
    } 
    else {
        return 'Está no vermelho'
    }
}

const maria = estaEndividado(5000, 7000)
const joao = estaEndividado(10000, 2000)
// console.log(maria)
// console.log(joao)
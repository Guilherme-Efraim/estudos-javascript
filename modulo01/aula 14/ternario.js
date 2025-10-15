// If Ternário 

let num1 = 10 
let num2 = 20 
let res = (num1 > num2 ? "Verdadeiro" : "Falso")
console.log(res)

// Sem ternário.

const par = ((numero)=> {
    const resto = numero % 2

    if(resto == 0){
        console.log(numero, "É par")
    }else {
        console.log(numero, "É impar")
    }
})

// par(11)
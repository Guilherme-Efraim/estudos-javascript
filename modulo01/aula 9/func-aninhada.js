// Funçõe aninhada:
//  É uma função que chama outra função que 
//  está dentra dela mesma.

const soma = (...valores) => {

    const somar = (val) => {
        let res = 0
        for (v of val) {
            res += v
        }
        return res
    }

    return somar(valores)
}

console.log(soma(10, 5, 15))
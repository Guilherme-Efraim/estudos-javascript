function soma(n1, n2){
    let calc = n1 + n2
    return calc
}

let res = soma(5, 5)

// console.log(res)

//  spreed transforma o parâmetro em uma array, 
//   podendo assim ser iterador item por item com for.

function soma(...valores){
    let res = 0
    for(let v of valores){
        res += v
    }
    return res
}
const resultado = soma(10, 5, 2, 15, 8)
console.log(resultado)

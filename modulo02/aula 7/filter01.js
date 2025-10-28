const filtroMaior18 = (valor) => {
    if(valor >=18)
        return valor
}
const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((val) => {
    if(val >=18)
        return val
})

const menor = idades.filter((val) => {
    if(val < 18)
        return val
})

// console.log(idades)
// console.log(maior)
// console.log(menor)

// const idades = [15, 21, 30, 17, 18, 44, 12, 50]

const novoArray =  idades.filter((ele) => {
    if(ele < 18){
        return console.log(ele + " é menor de idade.")
    } else {
        return console.log(ele + " é maior de idade.")
    }
})

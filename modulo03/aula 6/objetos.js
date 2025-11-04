/*
    Orientação a objetos

Operador new, 
    class é a base, recebe um nome Ex: Pessoa.
    metodo constructor(){}, recebe parâmetros.

Metodo: set altera o valor de uma propriedade da class.
Metodo: get retorna o valor de uma propriedade de um class.
*/

class Carro {
    constructor(pnome, ptipo){
        this.nome = pnome
        if(ptipo == 1){
            this.tipo = "Esportivo"
            this.velmax = 300
        } else if(ptipo == 2){
            this.tipo = "Utilitário"
            this.velmax = 100
        } else if(ptipo == 3){
            this.tipo = "Passeio"
            this.velmax = 160
        } else {
            this.tipo = "Militar"
            this.velmax = 180
        }
    }
    info(){
        console.log(`Nome: ${this.nome}`)
        console.log(`Tipo: ${this.tipo}`)
        console.log(`Velociade: ${this.velmax}`)
    }
}

let c1 = new Carro("Rapidão", 1)
let c2 = new Carro("Super Luxo", 2)
let c3 = new Carro("Bombadão", 4)
let c4 = new Carro("Carrego tudo", 3)

// console.log(c1.nome)
// console.log(c1.tipo)
// console.log(c1.velmax)
// console.log(c2.nome)
// console.log(c3.nome)
// console.log(c4.nome)

c1.info()
c2.info()
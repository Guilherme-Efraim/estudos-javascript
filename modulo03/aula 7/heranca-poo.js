class Carro{
    constructor(nome, portas){
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    // Metodos
    ligar=function(){
        this.ligado = true
    }
    desligar=function(){
        this.ligado = false
    }

    // Propriedade
    setCor=function(cor){
        this.cor = cor
    }
}

class Militar extends Carro {

}

const c1 = new Carro("Normal", 4)
c1.ligar()
c1.setCor(preto)

console.log(`Nome: ${c1.nome}`)
console.log(`portas: ${c1.portas}`)
console.log(`ligado: ${(c1.ligado ? "Sim" : "Não")}`)
console.log(`velocidade: ${c1.vel}`)
console.log(`cor: ${c1.cor}`)
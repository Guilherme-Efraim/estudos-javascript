// Membros Static - conceito de orientação a objetos.

class Npc {
    constructor(nome, energia) {
        this.nome = nome
        this.energia = energia
        if (energia >= 100) {
            this.classe = "Boss"
        } else if (energia >= 50) {
            this.classe = "Boss Medio"
        } else if (energia >= 10) {
            this.classe = "Comum"
        }
    }
    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Classe: ${this.classe}`)
        console.log(`Energia: ${this.energia}`)
        console.log("-------------------")
    }
}

const npc1 = new Npc("npc1", 100)
const npc2 = new Npc("npc2", 50)
const npc3 = new Npc("npc3", 10)

// npc1.info()
// npc2.info()
// npc3.info()
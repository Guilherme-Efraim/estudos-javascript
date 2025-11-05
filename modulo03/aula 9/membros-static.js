// Static - quando se definir um membro como static, esse membro
// pertence a class, e não as instâncias da classe.

class Npc {
    static alerta = false
    constructor(energia){
        this.energia = energia
        this.alerta = false
    }
    info = function(){
        console.log(`Enegia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}`)
        console.log("-------------------")
    }
    static alertar = function(){
        Npc.alerta = true
    }
}

const npc1 = new Npc(100)
const npc2 = new Npc(80)
const npc3 = new Npc(30)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()
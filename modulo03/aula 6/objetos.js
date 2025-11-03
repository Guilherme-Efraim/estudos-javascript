/*
    Orientação a objetos

Operador new, 
    class é a base, recebe um nome Ex: Pessoa.
    metodo constructor(){}, recebe parâmetros.

*/

const btn_add = document.querySelector("#btn_add")
const res = document.querySelector(".res")

class Pessoa{
    constructor(pnome, pidade){
        this.nome = pnome
        this.idade = pidade
    }
    getNome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }
    setidade(idade){
        this.idade = idade
    }
    info(){
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log("---------------------")
    }
}

let pessoas = []

const novaPessoa = () => {
    res.innerHTML = ""
    pessoas.map((ele, posi) => {
        const cPessoa = document.createElement("div")
        cPessoa.setAttribute("class", "pessoa")
        cPessoa.innerHTML = `Nome: ${ele.getNome()} <br/> Idade: ${ele.getidade()}`
        res.appendChild(cPessoa)
    })
}

btn_add.addEventListener("click", (evt)=> {
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ""
    idade.value = ""
    nome.focus()
    novaPessoa()
})

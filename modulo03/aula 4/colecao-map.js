// Coleção MAP, é um array que recebe chave e valor, e pode
// receber qualquer tipo de conteúdo.

const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "Javascript")
mapa.set(10, "CFB Cursos")
mapa.set(1, 100)
mapa.set("canal", 100)

// console.log(mapa)

// metodo HAS verifica se existe uma chave na coleção ou não.
if(mapa.has("canal")){
    caixa.innerHTML = "A chave existe na coleção"
} else {
    caixa.innerHTML = "A chave não está na coleção"
}
const caixa = document.querySelector("#caixa")

const curso = "Javascript"
const canal = "CFB Cursos"

// Modo Template Strings.
const frase = `Este é o curso de  ${curso} do canal ${canal}`

// modo Convencional
// const frase = "Este é o curso de " + curso + " do canal " + canal

caixa.innerHTML=frase
const telaResultado = document.getElementById("telaResultado")
const telaCalculo = document.getElementById("telaCalculo")

const botoes = document.getElementById("botoes")
const btnRecursos = document.getElementById("btnRecursos")
const caixaNumeros = document.getElementById("caixaNumeros")
const operadoresLogicos = document.getElementById("operadoresLogicos")

const btnNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

btnNumeros.map((ele, posi) => {
    const btnAdicionado = document.createElement("div")
    btnAdicionado.setAttribute("class", "boxNum")

    const num = document.createElement("button")
    num.setAttribute("id", "num"+posi)
    num.setAttribute("class", "numeroMsm")
    num.innerHTML=ele

    btnAdicionado.appendChild(num)
    caixaNumeros.appendChild(btnAdicionado)

})


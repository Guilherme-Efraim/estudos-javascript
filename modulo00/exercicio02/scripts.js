const telaResultado = document.getElementById("telaResultado")
const telaCalculo = document.getElementById("telaCalculo")

const botoes = document.getElementById("botoes")

const btnRecursos = document.getElementById("btnRecursos")

const caixaNumeros = document.getElementById("caixaNumeros")
const numeroCollection = document.querySelectorAll(".numeroMsm")

const operadoresLogicos = document.getElementById("operadoresLogicos")

/*-----------Recursos-------------*/

const btnRecurso = ["Clear", "Remove", "="]

btnRecurso.map((ele, posi) => {
    const btnClear = document.createElement("button")
    btnClear.setAttribute("id", "recurso" + posi)
    btnClear.setAttribute("class", "btnRecurso")
    btnClear.innerHTML = ele

    btnRecursos.appendChild(btnClear)
})

/*-----------Números-------------*/

const btnNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

btnNumeros.map((ele, posi) => {
    const btnAdicionado = document.createElement("div")
    btnAdicionado.setAttribute("class", "boxNum")

    const num = document.createElement("button")
    num.setAttribute("id", "num" + posi)
    num.setAttribute("class", "numeroMsm")
    num.innerHTML = ele

    btnAdicionado.appendChild(num)
    caixaNumeros.appendChild(btnAdicionado)
})

/*-----------Operadores Lógicos-------------*/

const operadoresArr = ["+", "-", "*", "%"]

operadoresArr.map((ele, posi) => {
    const operadorAdd = document.createElement("button")
    operadorAdd.setAttribute("id", "operador" + posi)
    operadorAdd.setAttribute("class", "operadores")
    operadorAdd.innerHTML = ele

    operadoresLogicos.appendChild(operadorAdd)
})

/*------------------------*/

botoes.addEventListener("click", (evt) => {
    const valores = []

    if (evt.target.tagName === 'BUTTON') {
        valores.push(evt.target)
    }

    valores.map((ele, posi) => {
        console.log(ele)
        telaCalculo.innerHTML = ele
    })
})

// btnClicado.map((ele, posi) => {
//     telaCalculo.innerHTML = ele
// })





const caixaTexto = document.getElementById("textCaixa")

let cursos = ["HTML", "CSS", "JavaScript"]

cursos.push("C++")
// cursos.pop()
cursos.unshift("Python")

cursos.map((ele, posi) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "texto"+ posi)
    novoElemento.setAttribute("class", "texto")
    novoElemento.innerHTML = ele

    caixaTexto.appendChild(novoElemento)
})

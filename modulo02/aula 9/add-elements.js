
const caixa2 = document.getElementById("caixa2")

const btnAddAntes = document.getElementById("btnAddAntes")
const btnAddDepois = document.getElementById("btnAddDepois")
const btnRemSelecionado = document.getElementById("btnRemSelecionado")
const btnCurSelecionado = document.getElementById("btnCurSelecionado")

const cursos = ["HTML", "CSS", " JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursos.map((el, pos) => {
    const novoCurso = document.createElement("div")
    novoCurso.setAttribute("id", "c"+ pos)
    novoCurso.setAttribute("class", "curso c1")
    novoCurso.innerHTML=el
    caixa2.appendChild(novoCurso)
})
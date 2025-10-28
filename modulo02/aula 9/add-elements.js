
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

    const text = document.createElement("div")
    text.setAttribute("class", "textCurso")
    text.innerHTML=el

    const radio = document.createElement("input")
    radio.setAttribute("class", "radio")
    radio.setAttribute("type","radio")
    
    const lixxo = document.createElement("div")
    lixxo.setAttribute("class", "lixeira")
    lixxo.innerHTML="Lixo"

    lixxo.addEventListener("click", (evt) => {
        caixa2.removeChild(novoCurso)
    })

    novoCurso.appendChild(text)
    novoCurso.appendChild(radio)
    novoCurso.appendChild(lixxo)

    caixa2.appendChild(novoCurso)
})

const cursos = [...document.querySelectorAll(".curso")]
const btnCopiar = document.querySelector(".btn-copiar")
const btnVoltar = document.querySelector(".btn-voltar")
const caixa1 = document.getElementById("caixa1")
const caixa2 = document.getElementById("caixa2")

cursos.map((ele) => {
    ele.addEventListener("click",(evt) => {
        const curso = evt.target
        curso.classList.toggle("destaque")
    })
})

btnCopiar.addEventListener("click", () => {
    const cursosDestaque = [...document.querySelectorAll(".destaque")]
    cursosDestaque.map((ele) => {
        caixa2.appendChild(ele)
    })
})

btnVoltar.addEventListener("click", () => {
    cursos.classList.remove("destaque")
})



// Quest: verificar o nome do curso selecionado.

const curSelecionado = document.getElementById("CurSelecionado")
const removSelecionado = document.getElementById("removSelecionado")
const cursos = document.querySelectorAll(".curso")

const radioSelecionado = () => {
    const radioTodos = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = radioTodos.filter((ele, posi, arr) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

curSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if(rs!=undefined){
        const curSelecionado = rs.parentNode.previousSibling.textContent
        alert("Curso selecionado:" + curSelecionado)
    }else {
        alert("Selecione um curso")
    }
})

removSelecionado.addEventListener("click", (evt)=> {
    const rs = radioSelecionado()
    if(rs!=undefined){
        const curSelecionado = rs.parentNode
        curSelecionado.remove()
    }else {
        alert("Selecione um curso")
    }
})

const caixa1 = document.getElementById("caixa1")

const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQl", "ReactNative"]

cursos.map((ele, position) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + position)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML=ele
    caixa1.appendChild(novoElemento)
})

console.log(caixa1)


/*
.removeChild(evt.target), remove um elemento filho
    do pai dele.

.createElement("div"), cria elementos do DOM.

.setAttribute("id", "curso"), adiciona um atributo, Ex id="curso".

.appendChild(), adiciona um elemento filho ao container pai.


*/


// getElementById("") é usado para pegar um 
//    elemento HTML pelo ID.

const c1 = document.getElementById("c1")
const c2 = document.getElementById("c2")
const c3 = document.getElementById("c3")
const c4 = document.getElementById("c4")
const c5 = document.getElementById("c5")
const c6 = document.getElementById("c6")

const arrayElementos = [c1, c2, c3, c4, c5, c6]

for(let i of arrayElementos){
    i.innerHTML="CFB cursos"
}

// console.log(arrayElementos)

arrayElementos.map((e) => {
    // console.log(e)
})

// getElementByTagName("") é usado para pegar um
//     elemento pela tag, assim retornando uma collection.

// Utilizando Spreed a collection se transforma em um array iteravel.

const colecaoHTML = [...document.getElementsByTagName("div")]

colecaoHTML.map((item) => {
    console.log(item)
})
// getElementsByClassName, pega varios 
//    elementos com a mesma classe retornando uma
//    collectionHTML.

// Depois de aplicar colchetes e SPREED, se transforma num array.

const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]

console.log(cursosTodos)
console.log(cursosC1)

cursosC1.map((element) => {
    element.classList.add("destaque")
})

// getElementsByClassName é usado para pegar o elemento pela class.
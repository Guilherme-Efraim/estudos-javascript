// getElementByTagName("") é usado para pegar um
//     elemento pela tag, assim retornando uma collection.

// Utilizando Spreed a collection se transforma em um array iteravel.

const colecaoHTML = [...document.getElementsByTagName("div")]

colecaoHTML.map((item) => {
    // console.log(item)
})
// HTML collection: Só recebe elementos HTML.

const objs1 = document.getElementsByTagName("div")


// Array de elementos HTML. Pode-se adicionar outros elementos: valores, strings...

const objs2 = [...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML="Curso"
});

console.log(objs1)
console.log(objs2)
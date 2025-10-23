const btnC1 = document.querySelector("#c1")
const todosBotoes = [...document.querySelectorAll(".curso")]

todosBotoes.map((ele) => {
     ele.addEventListener("click", (evt) => {
        const ele = evt.target
        ele.classList.toggle("destaque")
        console.log(ele.innerHTML + " foi clicado")
     })
})
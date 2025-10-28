const caixa01 = document.getElementById("caixa01")

const heros = ["lapu-lapu", "vexana", "hilda", "fanny"]

heros.map((ele, posi)=>{
    const figuraHero = document.createElement("div")
    figuraHero.setAttribute("id", "box"+ posi)
    figuraHero.setAttribute("class", "boxFilho")
    
    const nomeHero = document.createElement("div")
    nomeHero.setAttribute("class", "titulo")
    nomeHero.innerHTML=ele

    const heroImage = document.createElement("img")
    heroImage.setAttribute("class", "heroImage")
    heroImage.setAttribute("src", "")

    caixa01.appendChild(figuraHero)
    figuraHero.appendChild(nomeHero)
    figuraHero.appendChild(heroImage)
})
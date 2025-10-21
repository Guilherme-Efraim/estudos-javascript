
const leitorDeArray = (...leitor) => {
    let res = 0
    for(let i of leitor){
        res += i
    }
    return res 
}
console.log(leitorDeArray(10, 20, 30))

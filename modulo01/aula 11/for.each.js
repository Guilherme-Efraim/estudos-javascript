/*
    ForEach(item, index. array)

item( - Dados/Informações contidos na posição atual do Array)

index( - Número da posição. Sempre começando em 0.)

array( - Retorna o Array completo)

*/

const users = [
    { name: 'Rodolfo', age: 33, contact: '(19) 94343-3434'},
    { name: 'Paulo', age: 21, contact: '(19) 94343-3434'},
    { name: 'Aline', age: 40, contact: '(19) 94343-3434'},
    { name: 'Maria', age: 12, contact: '(19) 94343-3434'},
]

users.forEach(function(item, index){
    if(item.age < 18){
        console.log(`O cliente ${item.name}, que está na posição ${index} é menor de idade`)
    }
})
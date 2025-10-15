/*

MAP(Mapear item por item do array)
    - Cria um novo array com a mesma quantidade de itens do array original.
    - No novo array você pode altera o que quiser em ralação ao array original.
    - Você tem acesso a 3 dados:
        - Item por item do array
        - Posição atual do array
        - Array completo

REDUCE(Reduz o array a um único valor)
    - Você tem acesso a 4 dados:
        - Acumulador
        - Valor Atual
        - Posição Atual
        - Array Completo

FILTER(Filtrar o array)
    - Cria um novo array filtrando os valores desejados do array Original
    - Você tem acesso a 3 dados:
        - Item por item do array
        - Posição atual do array
        - Array Completo
*/

const numeros = [1, 2, 3, 8, 10]

const dobro = numeros.map((numero) => {
    return numero * 2
})
// console.log(dobro)

// objetivo: Criar um novo array formatando a moeda e dando desconto aos clientes.

const produtos = [
    { id: 1, nome: "Smartphone Galaxy S21", preco: 3999.99, temDesconto: true, quantidade: 1,},
    { id: 2, nome: "Notebook Dell Inspiron", preco: 4500.00, temDesconto: false, quantidade: 3,},
    { id: 3, nome: "Smart Tv LG 55", preco: 2799.00, temDesconto: true, quantidade: 5,},
    { id: 4, nome: "Fone de ouvido Bluetooth JBL", preco: 299.90, temDesconto: false, quantidade: 2,},
    { id: 5, nome: "Câmera DSLR Canon", preco: 3200.00, temDesconto: true, quantidade: 1,},
    { id: 6, nome: "Tablet iPad Air", preco: 4199.00, temDesconto: false, quantidade: 8,},
    { id: 7, nome: "Console PlayStation 5", preco: 4699.00, temDesconto: true, quantidade: 2,},
    { id: 8, nome: "Smartwatch Apple Watch", preco: 2499.00, temDesconto: false, quantidade: 7,},
    { id: 9, nome: "Impressora HP Multifuncional", preco: 599.90, temDesconto: true, quantidade: 5,},
    { id: 10, nome: "Caixa de som Prtátil Sony", preco: 1000.00, temDesconto: false, quantidade: 3,},
]

const novosProdutos = produtos.map( produto => {

    const novoPreco = produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id: produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {
            style: 'currency', currency: 'BRL'
        }),
        quantidade: produto.quantidade
    }
})

// console.log(novosProdutos)

// Quest: Qual será o faturamento, se vendermos todo o estoque?.

const numeros02 = [1, 2, 3, 4, 5]

const soma = numeros02.reduce((acumulador, atual) => {
    const total = acumulador + atual

    return total
})

// console.log(soma)

const valorEstoque = produtos.reduce( (acumulador, atual) => {

        return acumulador + (atual.preco * atual.quantidade)
}, 0)

// console.log(
//     valorEstoque.toLocaleString('pt-br', {
//         style: 'currency',
//         currency: 'BRL',}),
//     )


// Filtrar somente os produtos em promoção

const numeros03 = [1,,2, 3, 4, 5, 6, 7, 8, 9, 10]

const par = numeros03.filter(numero02 => {
    return numero02 % 2 === 0
})

// console.log(par)

const valorProdutosPromocao = produtos.filter( produto => produto.temDesconto)

// console.log(valorProdutosPromocao)

// Abreviação, forma resumida da utilização de Map, Filter e Reduce.

const faturamentoTotal = produtos.map((produto) => {
    return { ...produto, quantidade:produto.quantidade + 10}
})
.filter((produto) => produto.temDesconto)
.reduce((acumulador, produto) => acumulador + produto.quantidade * produto.preco,
 0,
)

console.log(faturamentoTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL'}))







/*
    Conversão de um objeto literal
Para transferir os dados para uma "API (gravar em uma base de dados)",
é necessário converter os dados em JSON.
*/

const pessoa = {
    nome: "Bruno",
    canal: "CFB Cursos",
    cursos: "Javascript",
    aulas:{
        aula01: "Introdução",
        aula02: "Variaveis",
        aula03: "Condicionais"
    }
}

// Conversão de um objeto em string JSON.
const s_json_pessoa = JSON.stringify(pessoa)

const string_pessoa = {"nome":"Bruno","canal":"CFB Cursos","cursos":"Javascript","aulas":{"aula01":"Introdução","aula02":"Variaveis","aula03":"Condicionais"}}

// Conversão de uma string JSON em objeto.
const o_json_pessoa = JSON.parse(s_json_pessoa)

console.log(pessoa)
console.log(s_json_pessoa)
console.log(o_json_pessoa)

// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
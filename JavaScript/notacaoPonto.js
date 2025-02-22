//notacao ponto

let objeto01 = {}
objeto01.nome = 'Edson'
console.log(objeto01)


let pessoa = {
    nome: 'Jose',
    email: "Jose@gmail.com",
    telefone: '(15)999444666',
    endereco: {
        rua: 'Rua das flores',
        numero: 1,
        bairro: 'Vila teste',
    },
    notas: [10, 8, 7.5, 10]
}

console.log(pessoa.endereco.rua)
console.log(pessoa.notas[2])
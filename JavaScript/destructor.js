//exemplo de destructor
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

let {nome, email} = pessoa
console.log(nome)

//mundanca de nome da variavel
let{nome: a, telefone: b} = pessoa
console.log(a, b)

//exemplo com array
let[x, y, z] = [1, 2, 3]
console.log(y)

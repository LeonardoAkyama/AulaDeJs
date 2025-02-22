const qualquercoisa = [];
qualquercoisa[0] = 1

console.log(qualquercoisa)

//uma array que pode se colocar qualquer coisa
qualquercoisa[1] = 'a'
console.log(qualquercoisa)

const coisas = [1, 2, 3.5, 4]
console.log(coisas[2])

coisas[10] = 'Edson'
console.log(coisas)

//como colocar itens no comeco da lista

coisas.unshift('primeiro')
console.log(coisas)
coisas.shift(coisas)
console.log(coisas)

//como colocar itens no final da lista]

console.log("tamanho do array "+coisas.length) //coisas.length mostra quandos itens tem no array 
coisas.push('ultimo item')
console.log(coisas)
coisas.pop() // tira 
console.log(coisas)

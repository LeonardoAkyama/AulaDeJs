class pessoa{}
console.log(typeof pessoa)

//funcao nomeada
function subtracao(num1, num2){
    return num1 - num2
}

console.log(subtracao(10, 4))
console.log(subtracao(10))
console.log(subtracao(5, '5'))

//funcao nao nomeada
let somar = function(num1, num2){ //tem como  colocar uma funcao dentro de uma variavel
    return num1 + num2
}

console.log(somar(10, 4))
console.log(somar(5, '5'))//aqui ele nao soma porque o js pensa que qr concatenar

//arrow function
let divisao = (n1, n2) => {
    if(n2 == 0){
        return "impossivel fazer a conta"
    }
    else{
        return n1 / n2
    }
}

console.log(divisao(5, 0))
console.log(divisao(10, 5))

//forma resumida do arrow function
let mult = (n1, n2) =>  n1 * n2
console.log(mult(2, 3))

let operacaoMat = (num1 , num2, operacao) => operacao(num1, num2) 
console.log(operacaoMat(3, 6, somar))

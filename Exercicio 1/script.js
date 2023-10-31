let number1 = prompt('Digite o primeiro número ')
let number2 = prompt('Digite o segundo número ')

number1 = Number(number1)
number2 = Number(number2)

const sum = number1 + number2
alert(`A soma dos dois números é de: ${sum}.`)

const sub = number1 - number2
alert(`A subtração dos dois números é de: ${sub}`)

const multi = number1 * number2
alert(`A multiplicação dos dois números é de ${multi}.`)

const div = number1 / number2
alert(`A divisão dos dois números é de: ${div}`)

const rest = number1 % number2
alert(`O resto da divisão é de: ${rest}.`)

let oddOrEven = sum % 2;

if (oddOrEven == 0) {
  alert('O resultado da soma é Par')
} else {
  alert('O resultado da soma é Impar')
}

if(number1 == number2) {
  alert('Os números digitados são iguais')
} else {
  alert('Os números digitados são diferentes')
}

let num = [5, 4, 10]
num[3] = 6  // adiciona o valor 6 ao elemento de indice 3
num.push(7) // adiciona o valor 7 ao último elemento


console.log(`${num}`)
console.log(`${num[1]}`)
console.log(num.length)
console.log(num)
console.log(num.sort())  // função sort()em JavaScript ordena os elementos de um array em ordem lexicográfica (alfabética) por padrão. Isso significa que, quando você usa sort()um array de números, ele os trata como strings e os ordena com base em sua representação de string. É por isso que o número 10 aparece antes dos outros números na saída.

let pos = num.indexOf(3)  // traz a posição aonde se encontra o valor 5

console.log(`${pos}`)
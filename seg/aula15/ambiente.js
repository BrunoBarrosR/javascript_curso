let num = [5, 8, 2, 9, 3]
num[3] = 6
num.push(7)
num.sort()


console.log(num)
console.log(`${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(num[5])
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontraro!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


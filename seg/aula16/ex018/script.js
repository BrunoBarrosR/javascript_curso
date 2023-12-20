var num = document.querySelector('#numtxt')
var lista = document.querySelector('#flista')
var res = document.querySelector('#res')
var array = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, array)) {
        array.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adiconado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()

}

function finalizar() {
    if (array.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        var tot = array.length
        var maior = array[0]
        var menor = array[0]
        var soma = 0
        var media = 0
        for (var pos in array) {
            soma += array[pos]
            if (array[pos] > maior) {
                maior = array[pos]
            } 
            if (array[pos < menor]) {
                menor = array[pos]
            }

        }

        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todo os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`

    }
}
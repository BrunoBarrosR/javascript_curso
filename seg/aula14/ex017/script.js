function tabuada() {
    var num = document.querySelector('#numtxt')
    var tab = document.querySelector('#seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for (var c = 1; c <= 10; c++) {
             var item = document.createElement('option')
             item.text = `${n} x ${c} = ${n*c}`
             item.value = `tab${c}` //desnecessário para JS
             tab.appendChild(item)
        }

    }
}
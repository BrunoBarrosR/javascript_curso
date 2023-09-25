function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um valor!')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for (c = 1; c <= 10; c++) {
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}
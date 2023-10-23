function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('pres')
    let res2 =document.getElementById('pres2')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Dados não inseridos')
    } else {
        res2.innerHTML = 'Contando: '

        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            p = 1
            res.innerHTML = `Passo recebeu o valor de 1`
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res2.innerHTML += ` ${c} \u{1F449} `
            }
            
        } else {
            for(let c = i; c >= f; c -=p) {
                res2.innerHTML += ` ${c} \u{1F449} `
            }
            
        }
        res2.innerHTML += `\u{1F3C1}`


    }
}

function contar() {
    var iniTex = document.querySelector('#initxt')
    var fimTex = document.querySelector('#fimtxt')
    var pasTex = document.querySelector('#pastxt')
    var res = document.querySelector('#res')

    if (iniTex.value.length == 0 || fimTex.value.length == 0 || pasTex.value.length == 0) {
        window.alert('Favor verificar os dados e tente novamente!')
    } else {
        var i = Number(iniTex.value)
        var f = Number(fimTex.value)
        var p = Number(pasTex.value)
        res.innerHTML = 'Contando: <br>'

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            //Contagem crescente
            for (var c = i; c <= f; c = c + p) {
                res.innerHTML += `${c} => `
            }
        } else {
            //Contagem decrescente
            for (var c = i; c >= f; c = c - p) {
                res.innerHTML += `${c} => `
            }
        }

    }
    res.innerHTML += 'Fim!'

}
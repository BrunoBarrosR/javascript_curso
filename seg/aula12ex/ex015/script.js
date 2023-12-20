function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.querySelector('#anotxt')
    var res = document.querySelector('div#res')
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoNasc.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menino.png')
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'meninojovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21 ) {
                //Jovem
                img.setAttribute('src', 'meninajovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)

    }


}
function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    // var hora = data.getHours()
    var hora = 16

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        document.body.style.background ='#FFEAC6'
    } else if (hora >= 12 && hora < 19) {
        //Boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#D56711'
    } else if (hora >= 19 && hora < 23) {
        //Boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#024598'
    } else {

    }


}

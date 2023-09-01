function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.srv = 'fotomanha.png'
        document.body.style.background = '#FFE8CD'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#FFA675'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png'
        document.body.style.background = '#2B466A'
    }

}



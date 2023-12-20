var agora = new Date()
var hora = agora.getHours()
// var hora = 25
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 5) {
    console.log('Vai dormir!! É madrugada!')

} else if (hora >= 5 && hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora < 19 ) {
    console.log('Boa tarde!')
} else if (hora >= 19 && hora < 24) {
    console.log('Boa noite')
} else {
    console.log('Tá maluco?? Tá biruleibe?????')
}
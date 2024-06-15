//alert('Olá!')//Cria alertas na tela
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('foto')
    var data = new Date()// pega a data do sistema
    var hora = data.getHours()// pega a hora do sistema
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        //Bom Dia!
        img.src= 'manha.png'
        document.body.style.background = '#999185'
    }
    else if (hora >= 12 && hora >= 18){
        //Boa tarde!
        img.src= 'tarde.png'
        document.body.style.background = '##f7d8b7'
    }
    else {
        //Boa Noite!
        img.src= 'noite.png'
        document.body.style.background = '#210f00'
    }
}

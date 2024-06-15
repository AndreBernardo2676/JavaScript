function verificar() {
    var data = new Date()//Pega a data atual
    var ano = data.getFullYear()//Pega o ano com quatro digitos
    var fano = document.getElementById('txtano')//Vinculao id do txt ano no HTML
    var res = document.querySelector('div#res')//Vincula com o id da div
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('ERRO! Verifique os dados e tente de novo')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)

           
        }
}




    



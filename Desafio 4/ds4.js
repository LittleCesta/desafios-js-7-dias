var numComp = Math.floor(Math.random() * (10 - 0 + 1) + 0)
var tentativas = 3

function verificar(){
    var numero = window.document.querySelector('input#numero').value
    var res = window.document.querySelector('div#res')

    if(numero === '' || numero > 10 || numero < 0){
        alert('Preencha o numero corretamente!!')
        return;
    }
     
    if(numero == numComp){
        res.innerHTML = `<p> Parabéns você acertou!!</p>`
    }
    else{
        tentativas--
        if(tentativas > 0){
            res.innerHTML = `<p> Errado!! Você tem mais <strong>${tentativas}</strong> tentativa(s)</p>`
        } else {
            res.innerHTML = `<p> O numero de tentativas acabou! O numero correto era <strong>${numComp}</strong>!!</p>`
            mostrarBotaoRecarregar()
        }
     }

function mostrarBotaoRecarregar() {
    // Mostra o botão de recarregar a página
    document.getElementById('btnRecarregar').style.display = 'inline-block';
}

       
}
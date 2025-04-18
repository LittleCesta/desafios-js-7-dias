function guardar(){
    var nome = window.document.querySelector('input#nome').value 
    var idade = window.document.querySelector('input#idade').value
    var res = window.document.querySelector('div#res')
    var linguagem = window.document.querySelector('input#linguagem').value
    if(nome === '' || idade === '' || linguagem === ''){
        alert('Preencha todos os campos!!')
    }

    else{
        res.innerHTML = `<p> Olá <strong>${nome}</strong>, 
        você tem <strong>${idade}</strong> anos e está estudando <strong>${linguagem}</strong></p>`
    }
}
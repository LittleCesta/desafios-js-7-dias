function guardar(){
    var nome = window.document.querySelector('input#nome').value 
    var idade = window.document.querySelector('input#idade').value
    var res = window.document.querySelector('div#res')
    var linguagem = 'A definir'
    if(nome === '' || idade === ''){
        alert('Preencha todos os campos!!')
    }

    else{
        res.innerHTML = `<p> Olá <strong>${nome}</strong>, 
        você tem <strong>${idade}</strong> anos e nós vamos jogar um
        <strong>Jogo</strong></p>`
    }
    do{
        var resposta1 = prompt(`Você gostaria de seguir a área de front-end ou back-end?\nResponda com numero: \n1 - Front-End\n2 - Back-End`)
        if(resposta1 > 2){
            alert('Número inválido!!!')
        } 
    }
    while(resposta1 > 2 || resposta1 === '')
    switch (resposta1) {
        case '1':
            var areaP = 'Front-End'
            var resposta2 = prompt(`Front-End, que legal!!\nNesse caso, prefere aprender React ou Vue?\nResponda com numero:\n1 - React\n2 - Vue`)
            if(resposta2 == '1'){
                linguagem = 'React'
                res.innerHTML += `<p>Que legal! Você que aprender mais sobre <strong>${linguagem}</strong></p>`
            } else if(resposta2 == '2'){
                linguagem = 'Vue'
                res.innerHTML += `<p>Que legal! Você que aprender mais sobre <strong>${linguagem}</strong></p>`
            }
            else{
                alert("Resposta inválida! Inserir os numeros 1 ou 2!")
            }    

            break;

        case '2':
            var areaP = 'Back-End'
            var resposta2 = prompt(`Back-End, que legal!!\nNesse caso, prefe aprender C# ou Java?\nResponda com numero:\n1 - C#\n2 - Java`)
            if(resposta2 == '1'){
                linguagem = 'C#'
                res.innerHTML += `<p>Que legal! Você que aprender mais sobre <strong>${linguagem}</strong></p>`
            } else if(resposta2 == '2'){
                linguagem = 'Java'
                res.innerHTML += `<p>Que legal! Você que aprender mais sobre <strong>${linguagem}</strong></p>`
                }
            else{
                alert("Resposta inválida! Inserir os numeros 1 ou 2!")
            }    
            break;    
    
        default:
            break;
    }    
 
do{    
    var resposta3 = prompt(`Vai seguir se especializando na área ou se tornar fullstack?\nResponda com numeros:\n1 - Se especializar\n2 - Fullstack`)
        if(resposta3 > 2){
            alert('Número inválido!!!')
        } 
    }
    while(resposta3 > 2)     
        if(resposta3 == '1'){
            res.innerHTML += `<p>Muito bem! Sucesso na carreira de <strong>${areaP}</strong>!.</p>`
        } else if(resposta3 == '2'){
            res.innerHTML += "<p>Que bacana!! Sucesso se tornando um desenvolvedor Fullstack!!</p>"
        } 

res.innerHTML += "<p>Outras tecnologias que você que estudar: </p>"    
do{     
    var tecnologias = prompt(`Quais tecnologias além das informadas anteriormente você gostaria de se especializar?`)            
    res.innerHTML += `<br><p><strong>${tecnologias} </strong></p>`    
    var resposta4 = prompt('Deseja continuar? Sim ou Não')        
}

while(resposta4 == 'Sim' || resposta4 == 'sim' || resposta4 == 'SIM')
 /*   if(resposta == '1'){
        res.innerHTML += "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>"
    } else if(resposta == '2'){
        res.innerHTML += "<p>Ahh... que pena! Já tentou aprender outra linguagem?</p>"
    }

    var resposta2 = prompt(`Você gosta de estudar ${linguagem}? Responda com numero: 1 - para SIM ou 2 - Para NÃO`)
    if(resposta == '1'){
        res.innerHTML += "<p>Muito bom! Continue estudando e você terá muito sucesso.</p>"
    } else if(resposta == '2'){
        res.innerHTML += "<p>Ahh... que pena! Já tentou aprender outra linguagem?</p>"
    } else{
        res.innerHTML += "<p>Resposta inválida!! digite 1 para <strong>SIM</strong> ou 2 para <strong>NÃO</strong>!</p>"
    }  
 */
}
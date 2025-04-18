function lista(){
    var res = window.document.querySelector('div#res')
    var frutas = []
    var laticinios = []
    var congelados = []
    var doces = []
    do{
        var resposta1 = prompt(`Você gostaria de adicionar um tem a sua lista?\nResponda Sim ou não.`)
        if(resposta1.toLocaleLowerCase() === 'sim'){
            var resposta2 = prompt(`Qual comida você deseja inserir?`)
            var resposta3 = prompt(`Em qual categoria ela se encaixa?\nResponda com numeros:\n1 - Frutas\n2 - Laticinios\n3 - Congelados\n4 - Doces.`)
            switch (resposta3) {
                case '1':
                    frutas.push(resposta2)
                break;

                case '2':
                    laticinios.push(resposta2)
                break;

                case '3':
                    congelados.push(resposta2)
                break;
                    
                case '4':
                    doces.push(resposta2)
                break;    

                default:
                break;
            }
        } else if(resposta1.toLocaleLowerCase() === 'não' || resposta1.toLocaleLowerCase() === 'nao'){
            break;
        } else {
            alert('Resposta inválida!! Por favor, responda com "Sim" ou "Não".')
        }
    }
    while(true)

res.innerHTML = `<h3>Lista de Compras</h3>`

res.innerHTML += `<p><strong>Frutas:</strong> ${frutas.join(', ') || 'Nenhuma'}</p>`;
res.innerHTML += `<p><strong>Laticinios:</strong> ${laticinios.join(', ') || 'Nenhuma'}</p>`;
res.innerHTML += `<p><strong>Congelados:</strong> ${congelados.join(', ') || 'Nenhuma'}</p>`;
res.innerHTML += `<p><strong>Doces:</strong> ${doces.join(', ') || 'Nenhuma'}</p>`;


}
const res = window.document.querySelector('div#res')
const numeros = document.querySelectorAll('.botoes')
let operacao = ""

function calcular(operacao){
    const operadores = operacao.match(/[\+\-\*\/]/)
    if (!operadores) return operacao;

    const operador = operadores[0]
    const [op1, op2] = operacao.split(operador).map(Number)
    switch (operador) {
        case "+":
            return somar(op1, op2);
        case "-":
            return subtrair(op1, op2);
        case "*":
            return multiplicar(op1, op2);
        case "/":
            return dividir(op1, op2);
        default:
            return "Erro"; // Operador inválido
    }
}

numeros.forEach((botao) => {
    botao.addEventListener('click', () => {
        const valor = botao.value

        if(valor === "="){
            try{
                const resultado = calcular(operacao);
                operacao = String(resultado);
                res.textContent = operacao
            }catch {
                res.textContent = "Erro!"
                operacao = ""
            }
        }
        else if(valor === "C"){
            operacao = ""
            res.textContent = 0
        }
        else {
            operacao += valor
            res.textContent = operacao
        }
    });
    
});

function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    if(b === 0){
        return "Erro!"
    }
    return a / b
}
function encerrar(){
    res.textContent = ''
    alert('Até a próxima!!')
}
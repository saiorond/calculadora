const botoesNumeros = document.querySelectorAll("[data-numeros]");
const botoesOperadores = document.querySelectorAll("[data-operadores]");
const botaoIgual = document.querySelector("[data-igual]");
const botaoDell = document.querySelector("[data-del]");
const botaoLimpaTudo = document.querySelector("[data-limpar-tudo]");
const operacaoAnteriorTexto = document.querySelector("[data-operacao-anterior]");
const operacaoAtualTexto = document.querySelector("[data-operacao-atual]");

class Calculadora {
    constructor(operacaoAnteriorTexto, operacaoAtualTexto) {
        this.operacaoAnteriorTexto = operacaoAnteriorTexto;
        this.operacaoAtualTexto = operacaoAtualTexto;
        this.clear();
    }
    
    calcula() {
        let resultado;

        const _operacaoAnterior = parseFloat(this.operacaoAnterior);
        const _operacaoAtual = parseFloat(this.operacaoAtual);
    
        if (isNaN(_operacaoAnterior) || isNaN(_operacaoAtual)) return;
    
        switch (this.operacao) {
            case '+':
                resultado = _operacaoAnterior + _operacaoAtual;
                break;
            case '-':
                resultado = _operacaoAnterior - _operacaoAtual;
                break;
             case '÷':
                resultado = _operacaoAnterior / _operacaoAtual;
                break;    
            case '*':
                resultado = _operacaoAnterior * _operacaoAtual;
                break;
            default:
                return;            
        }

        this.operacaoAtual = resultado;
        this.operacao = undefined;
        this.operacaoAnterior = "";
    }

    operacaoEscolhida(operacao) {
        if (this.operacaoAnterior !== "") {
            this.calcula();
        }

        this.operacao = operacao;

        this.operacaoAnterior = this.operacaoAtual;
        this.operacaoAtual = "";
    }

    mostraNumero(number) {
        if (this.operacaoAtual.includes(".") && number === ".") return;

        this.operacaoAtual = `${this.operacaoAtual}${number.toString()}`;
    }

    clear () {
        this.operacaoAnterior = "";
        this.operacaoAtual = "";
        this.operacao = undefined;
    }
 
    atualizaDisplay() {
        this.operacaoAnteriorTexto.innerText = `${this.operacaoAnterior} ${this.operacao || ""}`;
        this.operacaoAtualTexto.innerText = this.operacaoAtual;
    }

}

const calculadora = new Calculadora(
    operacaoAnteriorTexto, operacaoAtualTexto
);

for (const botaoNumero of botoesNumeros) {
    botaoNumero.addEventListener("click", () => {
        calculadora.mostraNumero(botaoNumero.innerText);
        calculadora.atualizaDisplay();
    })
}

for (const botaoOperador of botoesOperadores) {
    botaoOperador.addEventListener("click", () => {
        calculadora.operacaoEscolhida(botaoOperador.innerText);
        calculadora.atualizaDisplay();
    })
}

botaoLimpaTudo.addEventListener("click", () => {
    calculadora.clear();
    calculadora.atualizaDisplay();
})
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

    mostraNumero(number) {
        this.operacaoAtual = `${this.operacaoAtual}${number.toString()}`;
    }

    clear () {
        this.operacaoAnterior = "";
        this.operacaoAtual = "";
        this.operacao = undefined;
    }
 
    atualizaDisplay() {
        this.operacaoAnteriorTexto.innerText = this.operacaoAnterior;
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

botaoLimpaTudo.addEventListener("click", () => {
    calculadora.clear();
    calculadora.atualizaDisplay();
})
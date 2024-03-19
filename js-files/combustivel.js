function calculo() {

    let valorCombustivel = document.querySelector("#um").value;
    let distanciaKm = document.querySelector("#dois").value;
    let autonomiaCarro = document.querySelector("#tres").value;

    let litrosNecessarios = distanciaKm / autonomiaCarro;
    let litrosNecessariosFormat = litrosNecessarios.toFixed(2);

    let abastecimentoNecessario = litrosNecessarios * valorCombustivel;
    let abastecimentoNecessarioFormat = abastecimentoNecessario.toFixed(2);

    exibirResultado('h2', `Voce precisara abastecer: R$ ${abastecimentoNecessarioFormat}`)

}

function exibirResultado(tag, mensagem) {
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}

function limpar() {
    let campo1 = document.querySelector("#um");
    campo1.value = "";

    let campo2 = document.querySelector("#dois");
    campo2.value = '';

    let campo3 = document.querySelector("#tres");
    campo3.value = '';

    let mensagem = document.querySelector("h2");
    mensagem.innerHTML = 'Voce precisara abastecer: R$ 0.00';
}
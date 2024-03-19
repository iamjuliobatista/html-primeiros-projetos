function calculo() {
    let valorCorte = document.querySelector("#um").value;
    let mediaSemanal = document.querySelector("#dois").value;

    let mediaAnual = valorCorte * mediaSemanal * 52;
    let mediaAnualFormat = mediaAnual.toFixed(2);

    let mediaMensal = mediaAnual / 12;
    let mediaMensalFormat = mediaMensal.toFixed(2);



    exibirResultado("h2", `A média mensal será de R$ ${mediaMensalFormat}`);
    exibirResultado("#infoAnual", `A estimativa anual será de: R$ ${mediaAnualFormat}`);

    console.log("teste");
}

function exibirResultado(tag, mensagem) {
    let campo = document.querySelector(tag);
    campo.innerHTML = mensagem;
}
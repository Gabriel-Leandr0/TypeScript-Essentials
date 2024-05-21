const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inpuValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inpuValor.valueAsNumber;
    let data = new Date(inputData.value);
    if (tipoTransacao === TipoTransacao.DEPOSITO) {
        saldo += valor;
    }
    else if (tipoTransacao === TipoTransacao.PAGEMENTO_BOLETO || TipoTransacao.TRANSFERENCIA) {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação invalida!");
        return;
    }
    elementoSaldo.textContent = formatarMoeda(saldo);
    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});

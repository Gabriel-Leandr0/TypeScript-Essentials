//mexendo com nome
var nome = 'Gabriel';
// Selecione os elementos onde desejamos substituir o nome
var elementosNome = document.querySelector(".topo.container-padding.flex .usuario.flex span");
var saudacaoNome = document.querySelector(".block-saldo h2");
// Atualize o texto dos elementos selecionados
elementosNome.textContent = nome;
saudacaoNome.textContent = "Ol\u00E1, ".concat(nome, "! :)");
//mexendo com saldo
var saldo = 10000;
var elementoSaldo = document.querySelector(".cc .valor");
elementoSaldo.textContent = saldo.toString();
//mexendo no formulario
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = document.querySelector("#tipoTransacao");
    var inpuValor = document.querySelector("#valor");
    var inputData = document.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inpuValor.valueAsNumber;
    var data = new Date(inputData.value);
    if (tipoTransacao == 'Depósito') {
        saldo += valor;
    }
    else if (tipoTransacao == 'Transferência' || 'Pagamento de Boleto') {
        saldo -= valor;
    }
    else {
        alert("Tipo de transação invalida!");
        return;
    }
    elementoSaldo.textContent = saldo.toString();
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    console.log(novaTransacao);
    elementoFormulario.reset();
});

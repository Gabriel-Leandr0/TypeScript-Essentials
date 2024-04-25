//mexendo com nome

let nome = 'Gabriel';

// Selecione os elementos onde desejamos substituir o nome
const elementosNome = document.querySelectorAll(".topo.container-padding.flex .usuario.flex span");
const saudacaoNome = document.querySelector(".block-saldo h2");

// Atualize o texto dos elementos selecionados
elementosNome.forEach(elemento => {
    elemento.textContent = nome;
});

saudacaoNome.textContent = `Olá, ${nome}! :)`;


//mexendo com saldo

let saldo = 10000;

const elementoSaldo = document.querySelector(".cc .valor");
elementoSaldo.textContent = saldo



//mexendo no formulario

const elementoFormulario = document.querySelector(".block-nova-transacao form")

elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inpuValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");

    let tipoTransacao = inputTipoTransacao.value;
    let valor = inpuValor.value;
    let data = inputData.value;

    if (tipoTransacao == 'Depósito'){
        saldo += valor;
    }else if (tipoTransacao == 'Transferência' || 'Pagamento de Boleto'){
        saldo -= valor;
    } else{

        alert("Tipo de transação invalida!")
        return;
    }

    elementoSaldo.textContent = saldo

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    elementoFormulario.reset();

});
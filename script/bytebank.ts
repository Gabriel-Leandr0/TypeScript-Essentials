//mexendo com nome

let nome:string = 'Gabriel';

// Selecione os elementos onde desejamos substituir o nome
const elementosNome = document.querySelector(".topo.container-padding.flex .usuario.flex span") as HTMLElement;
const saudacaoNome = document.querySelector(".block-saldo h2") as HTMLElement;

// Atualize o texto dos elementos selecionados
elementosNome.textContent = nome;
saudacaoNome.textContent = `Olá, ${nome}! :)`;


//mexendo com saldo
let saldo:number = 10000;

const elementoSaldo = document.querySelector(".cc .valor") as HTMLElement;
elementoSaldo.textContent = saldo.toString();



//mexendo no formulario
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

elementoFormulario.addEventListener("submit", function(event){
    event.preventDefault();

    if(!elementoFormulario.checkValidity()){
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = document.querySelector("#tipoTransacao")as HTMLSelectElement;
    const inpuValor = document.querySelector("#valor") as HTMLInputElement;
    const inputData = document.querySelector("#data") as HTMLInputElement;

    let tipoTransacao:string = inputTipoTransacao.value;
    let valor:number = inpuValor.valueAsNumber;
    let data:Date = new Date(inputData.value);

    if (tipoTransacao == 'Depósito'){
        saldo += valor;
    }else if (tipoTransacao == 'Transferência' || 'Pagamento de Boleto'){
        saldo -= valor;
    } else{

        alert("Tipo de transação invalida!")
        return;
    }

    elementoSaldo.textContent = saldo.toString();

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }

    console.log(novaTransacao)
    elementoFormulario.reset();

});
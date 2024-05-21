let saldo = 10000;
const elementoSaldo = document.querySelector(".cc .valor");
if (!elementoSaldo !== null) {
    elementoSaldo.textContent = formatarMoeda(saldo);
}

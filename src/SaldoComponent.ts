let saldo:number = 10000;

const elementoSaldo = document.querySelector(".cc .valor") as HTMLElement;

if(!elementoSaldo !== null){
    elementoSaldo.textContent = formatarMoeda(saldo);
}
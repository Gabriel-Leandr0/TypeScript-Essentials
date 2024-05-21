let nome: string = 'Gabriel';

// Selecione os elementos onde desejamos substituir o nome
const elementosNome = document.querySelector(".topo.container-padding.flex .usuario.flex span") as HTMLElement | null;
const saudacaoNome = document.querySelector(".block-saldo h2") as HTMLElement | null;

// Verifique se os elementos foram encontrados antes de atualizar o texto
if (elementosNome) {
    elementosNome.textContent = nome;
} else {
    console.error('Elemento para nome não encontrado.');
}

if (saudacaoNome) {
    saudacaoNome.textContent = `Olá, ${nome}! :)`;
} else {
    console.error('Elemento para saudação não encontrado.');
}

// Formatando data atual
const elementoData = document.querySelector(".block-saldo time") as HTMLElement | null;
if (elementoData) {
    elementoData.innerHTML = formatarData(new Date());
} else {
    console.error('Elemento para data não encontrado.');
}
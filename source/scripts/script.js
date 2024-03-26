// Variáveis
let linguagem = document.querySelector("#linguagem");
let mensagem = document.querySelector("#mensagem");
const cod = document.querySelector("#codificar");
const decod = document.querySelector("#decodificar");
const form = document.querySelector("form");
let botao = document.querySelector('#botao');
const mensagemErro = document.querySelector("#erro");
const mensagemSaida = document.querySelector("#mensagemSaida");

// Funções 
const decodBase64 = (mensagem) => {
    let saida = atob(mensagem);
    exibirMensagem(saida);
}

const codBase64 = (mensagem) => {
    let saida = btoa(mensagem);
    exibirMensagem(saida);
}


const reset = () => {
    mensagemSaida.style.display = "none";
    mensagemErro.innerText = "";
}

const erro = () => mensagemErro.innerText = "Escreva uma mensagem";

const exibirMensagem = (mensagem) => {
    mensagemSaida.style.display = "block";
    mensagemSaida.innerHTML = `<p>${mensagem}</p>`;
}

const submit = (mensagem) => {
    if(linguagem.value == "base64" && cod.checked){
        codBase64(mensagem);
    } else if (linguagem.value == "base64" && decod.checked){
        decodBase64(mensagem);
    } else if (linguagem.value == "cesar" && cod.checked){
        console.log("cesar codificar");
    } else if (linguagem.value == "cesar" && decod){
        console.log("cesar decodificar");
    }
}

// Eventos
cod.addEventListener('click', () => botao.innerText = "Codificar");
decod.addEventListener('click', () => botao.innerText = "Decodificar");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    reset();
    (mensagem.value == "")? erro() : submit(mensagem.value);
})
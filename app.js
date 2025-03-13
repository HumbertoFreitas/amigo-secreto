//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let campo = document.querySelector("input");
    let nome = campo.value.trim();

    if(nome === ""){
        alert("Digite um nome");
        return;
    }

    if(amigos.includes(nome)){
        alert("Este nome já foi adicionado");
        return;
    }

    amigos.push(nome);
    campo.value = "";
    console.log(amigos);
    atualizarLista();
}

function atualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let nome = document.createElement("li");
        nome.textContent = amigos[i];
        lista.appendChild(nome);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Nenhum nome foi adicionado");
        return;
    }

    let numero = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[numero];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${sorteado}</li>`;
    console.log(sorteado);
}
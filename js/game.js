const opcoes = ["pedra", "papel", "tesoura"];

//Busca o nome do jogador e mostra no placar
let nomeJogador = localStorage.getItem('jogador');
let player = document.querySelector('#player');
let playerPlacar = document.querySelector('#player-placar');
player.innerHTML = nomeJogador;
playerPlacar.innerHTML = nomeJogador;

let imgJogador = document.querySelector("#resposta-jogador");
let imgMaquina = document.querySelector("#resposta-maquina");

let resultado = document.querySelector("#resultado");

let placarJogador = 0;
let txtPlacarJogador = document.querySelector("#placar-jogador");

let placarMaquina = 0;
let txtPlacarMaquina = document.querySelector("#placar-maquina");

let placarEmpate = 0;
let txtPlacarEmpate = document.querySelector("#placar-empate");

function partida(valor) {
    let jogador;

    //Escolha do jogador
    if(valor == 1) {
        jogador = opcoes[0];
    }else if(valor == 2) {
        jogador = opcoes[1];
    }else if(valor == 3) {
        jogador = opcoes[2];
    };

    //Imagem da escolha do jogador
    if(jogador == "pedra") {
        imgJogador.innerHTML = "<img src='./images/pedra.png'>";
    }else if(jogador == "papel") {
        imgJogador.innerHTML = "<img src='./images/papel.png'>";
    }else if(jogador == "tesoura") {
        imgJogador.innerHTML = "<img src='./images/tesoura.png'>";
    };
    
    //Escolha da máquina
    let numRandom = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    
    let maquina = opcoes[numRandom];

    //Imagem da escolha da máquina
    if(maquina == "pedra") {
        imgMaquina.innerHTML = "<img src='./images/pedra.png'>";
    }else if(maquina == "papel") {
        imgMaquina.innerHTML = "<img src='./images/papel.png'>";
    }else if(maquina == "tesoura") {
        imgMaquina.innerHTML = "<img src='./images/tesoura.png'>";
    };

    //Validação do ganhador e atualização do placar
    if(jogador == "pedra" && maquina == "tesoura" || jogador == "tesoura" && maquina == "papel" || jogador == "papel" && maquina == "pedra") {
        placarJogador++;
        resultado.innerHTML = "Jogador venceu!";
        txtPlacarJogador.innerHTML = placarJogador;
    }else if(maquina == "pedra" && jogador == "tesoura" || maquina == "tesoura" && jogador == "papel" || maquina == "papel" && jogador == "pedra") {
        placarMaquina++;
        resultado.innerHTML = "Máquina venceu!";
        txtPlacarMaquina.innerHTML = placarMaquina;
    }else {
        placarEmpate++;
        resultado.innerHTML = "Empate!";
        txtPlacarEmpate.innerHTML = placarEmpate;
    };
};
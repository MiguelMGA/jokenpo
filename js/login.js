let input = document.querySelector('.login-input');
let botao = document.querySelector('.login-btn');
let formulario = document.querySelector('.login-form');

//Função para habilitar ou desabilitar o botão
input.addEventListener('input', validaInput);

function validaInput(event) {
    if(event.target.value.length >= 1) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    };
};

//Função para salvar o nome do jogador e redirecionar para a página do game
formulario.addEventListener('submit', enviaFormulario);

function enviaFormulario(event) {
    event.preventDefault();
    
    localStorage.setItem('jogador', input.value);

    window.location = 'game.html';
};

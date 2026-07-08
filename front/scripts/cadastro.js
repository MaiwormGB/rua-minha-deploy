const login = document.getElementById("login");
const cadastro = document.getElementById("cadastro");

function semLogin(){



    login.style.display = "none";
    cadastro.style.display = "flex";


}

function voltarLogin(){

    login.style.display = "flex";
    cadastro.style.display = "none";

}






// ===== CONFIGURAÇÃO DA ANIMAÇÃO =====
const imagens = [
    "../acervo/personagens/milo/Milo fala 2.png",
    "../acervo/personagens/milo/Milo fala 3.png"
];

// ===== FUNÇÕES DA ANIMAÇÃO (adaptadas para contexto) =====
function trocarImagem(container) {
    const imagem = container.querySelector('#imagemPlayBtn');
    if (!imagem) return;
    
    // Pega o índice atual do container ou inicia em 0
    if (!container.dataset.indice) {
        container.dataset.indice = '0';
    }
    
    let indiceAtual = parseInt(container.dataset.indice);
    indiceAtual = (indiceAtual + 1) % imagens.length;
    container.dataset.indice = indiceAtual;
    
    imagem.src = imagens[indiceAtual];
}

function iniciarAnimacao(container) {
    // Se já existe um intervalo rodando, não cria outro
    if (container.dataset.intervalo && container.dataset.intervalo !== 'null') {
        return;
    }
    
    // Inicia o intervalo
    const intervalo = setInterval(function() {
        trocarImagem(container);
    }, 300);
    
    container.dataset.intervalo = intervalo;
}

function pararAnimacao(container) {
    // Se existe um intervalo rodando, para ele
    if (container.dataset.intervalo && container.dataset.intervalo !== 'null') {
        clearInterval(parseInt(container.dataset.intervalo));
        container.dataset.intervalo = 'null';
    }
    
    // Volta para a imagem padrão
    const imagem = container.querySelector('#imagemPlayBtn');
    if (imagem) {
        imagem.src = "../acervo/personagens/milo/Milo fala 1.png";
    }
}

// ===== FUNÇÃO PRINCIPAL DO PLAYER (configura cada player) =====
function configurarPlayer(container) {
    const audio = container.querySelector('#audio');
    const barra = container.querySelector('#barrinha');
    const botao = container.querySelector('.playBtn');
    
    if (!audio || !barra || !botao) {
        console.error('Player incompleto:', container);
        return;
    }
    
    // Estado do player (usando dataset para persistência)
    let usuarioEstaArrastando = false;
    
    // === EVENTOS DA BARRA ===
    barra.addEventListener('mousedown', function() {
        usuarioEstaArrastando = true;
    });
    
    barra.addEventListener('mouseup', function() {
        usuarioEstaArrastando = false;
    });
    
    barra.addEventListener('input', function() {
        usuarioEstaArrastando = true;
        if (!isNaN(audio.duration)) {
            const novoTempo = (barra.value / 100) * audio.duration;
            audio.currentTime = novoTempo;
        }
    });
    
    // === ATUALIZAR BARRA EM TEMPO REAL ===
    audio.addEventListener('timeupdate', function() {
        if (!usuarioEstaArrastando && !isNaN(audio.duration)) {
            const porcentagem = (audio.currentTime / audio.duration) * 100;
            barra.value = porcentagem;
        }
    });
    
    // === FIM DO ÁUDIO ===
    audio.addEventListener('ended', function() {
        pararAnimacao(container);
        barra.value = 0;
    });
    
    // === FUNÇÃO DE PLAY/PAUSE (será chamada pelo clique) ===
    function toggleAudio() {
        if (audio.paused) {
            audio.play().catch(erro => console.log('Erro ao reproduzir:', erro));
            iniciarAnimacao(container);
            console.log('Play!');
        } else {
            audio.pause();
            pararAnimacao(container);
            console.log('Pause!');
        }
    }
    
    // Conecta o clique ao toggle
    botao.onclick = function(event) {
        event.stopPropagation();
        toggleAudio();
    };
    
    // Retorna a função para uso externo (opcional)
    return {
        toggle: toggleAudio,
        audio: audio,
        barra: barra
    };
}

// ===== INICIALIZAR TODOS OS PLAYERS =====
document.addEventListener('DOMContentLoaded', function() {
    // Encontra todos os containers com player
    const containers = document.querySelectorAll('.bottomRight');
    
    containers.forEach(function(container, index) {
        console.log('Configurando player', index + 1);
        configurarPlayer(container);
    });
});

// ===== FUNÇÃO GLOBAL PARA COMPATIBILIDADE (se precisar) =====
function audioPlay() {
    // Esta função não é mais necessária, mas mantida para compatibilidade
    console.warn('audioPlay() está obsoleto. Use os botões diretamente.');
}
function atividade(){

    const personagems = document.getElementById("personagems");
    const atividade = document.getElementById("atividade");
    

    atividade.style.display = "flex";
    personagems.style.display = "none";

}

function personagems(){

    const personagems = document.getElementById("personagems");
    const atividade = document.getElementById("atividade");
    

    atividade.style.display = "none";
    personagems.style.display = "flex";

}

function voltarVizinha(){

    window.location.href ="../pages/vizinhanca.html"

}

//---------------- PLAYER DE AUDIO ----------------

// Variaveis do player

const imgs_animacao = [
    "../acervo/personagens/moon/moon fala 2.png",
    "../acervo/personagens/moon/moon fala 3.png"
];

const img_padrao = "../acervo/personagens/moon/moon fala 1.png"

const velocidade_animacao = 300;

function trocarImagem(container){

    const imagem = container.querySelector('.imagemPlayBtn')
    if (!imagem) return;

    let indice = parseInt(container.dataset.indice || '0');

    indice = (indice + 1) % imgs_animacao.length;

    container.dataset.indice = indice;

    imagem.src = imgs_animacao[indice];

}

function iniciarAnimacao(container) {
    // Se já tem animação rodando, não faz nada
    if (container.dataset.intervalo && container.dataset.intervalo !== 'null') {
        return;
    }
    
    // Cria um intervalo que troca a imagem a cada X ms
    const intervalo = setInterval(() => {
        trocarImagem(container);
    }, velocidade_animacao);
    
    // Guarda o ID do intervalo para poder parar depois
    container.dataset.intervalo = intervalo;
}

function pararAnimacao(container) {
    // Se existe um intervalo, para ele
    if (container.dataset.intervalo && container.dataset.intervalo !== 'null') {
        clearInterval(parseInt(container.dataset.intervalo));
        container.dataset.intervalo = 'null';
    }
    
    // Volta para a imagem padrão
    const imagem = container.querySelector('.imagemPlayBtn');
    if (imagem) {
        imagem.src = img_padrao;
    }
}

function configurarPlayer(container){

    const audio = container.querySelector('.audioPlayer');
    const barra = container.querySelector('.barrinha');
    const botao = container.querySelector('.imagemPlayBtn');

    if (!audio || !barra || !botao) {
        console.error('Player incompleto!', container);
        return;
    }

     let usuarioArrastando = false;

     // Quando começa a arrastar
    barra.addEventListener('mousedown', () => {
        usuarioArrastando = true;
    });
    
    // Quando para de arrastar
    barra.addEventListener('mouseup', () => {
        usuarioArrastando = false;
    });
    
    // Quando o valor da barra muda (arrastando ou clicando)
    barra.addEventListener('input', () => {
        if (!isNaN(audio.duration)) {
            const novoTempo = (barra.value / 100) * audio.duration;
            audio.currentTime = novoTempo;
        }
    });

    audio.addEventListener('timeupdate', () => {
        // Só atualiza se o usuário NÃO estiver arrastando
        if (!usuarioArrastando && !isNaN(audio.duration)) {
            const porcentagem = (audio.currentTime / audio.duration) * 100;
            barra.value = porcentagem;
        }
    });

    audio.addEventListener('ended', () => {
        pararAnimacao(container);
        barra.value = 0;
    });

    function togglePlay() {
        if (audio.paused) {
            // Toca o áudio
            audio.play().catch(erro => {
                console.log('Erro ao reproduzir:', erro);
            });
            // Inicia a animação
            iniciarAnimacao(container);
        } else {
            // Pausa o áudio
            audio.pause();
            // Para a animação
            pararAnimacao(container);
        }
    }

    botao.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita conflitos
        togglePlay();
    });

     return {
        play: togglePlay,
        audio: audio,
        barra: barra
    };

}

document.addEventListener("DOMContentLoaded", function(){

    const players = document.querySelectorAll('.player');

    players.forEach((container,index) =>{

        console.log(`Configurando player ${index + 1}...`);
        configurarPlayer(container);

    });

     console.log(`${players.length} player(s) configurado(s)!`);

});

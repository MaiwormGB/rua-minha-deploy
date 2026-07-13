const dados = localStorage.getItem("usuario");

let usuario = null;

if (dados && dados !== "undefined") {
    usuario = JSON.parse(dados);
}

console.log(usuario);

async function carregarAtividades() {

    const resposta = await fetch("../dados/atividades.json");

    return await resposta.json();
}

let atividadeAtual = null;

async function iniciar() {

    const dados = await carregarAtividades();

    const atividadesMoon = dados.atividades.filter(
        atividade => atividade.personagem === "Mel"
    );

    console.log(atividadesMoon);

    const lista = document.getElementById("lista");

    atividadesMoon.forEach((atividade) => {

        const novaAtividade = document.createElement("div");
        const header = document.createElement("div");
        const titulo = document.createElement("div");
        const h2 = document.createElement("h2");
        const resumo = document.createElement("p");

        const textoCompleto = atividade.texto.join("\n\n");

        h2.textContent = atividade.titulo;
        
        const limite = 200;

        let resumoTexto = textoCompleto;

        if (textoCompleto.length > limite) {

            resumoTexto = textoCompleto.slice(0, limite);

            resumoTexto = resumoTexto.slice(
                0,
                resumoTexto.lastIndexOf(" ")
        );

            resumoTexto += " [...]";

        }

        resumo.textContent = resumoTexto;


        novaAtividade.classList.add("atv");
        header.classList.add("header");
        titulo.classList.add("titulo");
        resumo.classList.add("resumo");

        lista.appendChild(novaAtividade);
        novaAtividade.appendChild(header);
        novaAtividade.appendChild(titulo);
        titulo.appendChild(h2);
        novaAtividade.appendChild(resumo);


        novaAtividade.addEventListener("click", () => {

            mudarAtividadeGrande(atividade);

        });


        });

}

iniciar();

function preencherAtividadeGrande(atividade){

    atividadeAtual = atividade;

    const titulo = document.getElementById("tituloAtvGrande");
    const texto = document.querySelector("#atividade_grande .texto");
    const audio = document.getElementById("audioAtvGrande");

    titulo.textContent = atividade.titulo;

    audio.src = atividade.audio;

    texto.innerHTML = "";

    atividade.texto.forEach(paragrafo => {

        const p = document.createElement("p");

        p.textContent = paragrafo;

        texto.appendChild(p);

    });

}

function concluirAtividade(id){

    let concluidas = JSON.parse(
        localStorage.getItem("atividadesConcluidas")
    ) || [];


    if(!concluidas.includes(id)){

        concluidas.push(id);

        localStorage.setItem(
            "atividadesConcluidas",
            JSON.stringify(concluidas)
        );

    }

}

function atividadeConcluida(id){

    const concluidas = JSON.parse(
        localStorage.getItem("atividadesConcluidas")
    ) || [];

    return concluidas.includes(id);

}

let tentativas = 0;



function confirmarAtividade(){

    const concluir = document.getElementById("senha_conf").value;

    if (concluir === usuario.senhaAdm){

        alert("Atividade concluida! Você pode ver a lista das atividades concluidas no seu perfil.")
   
        concluirAtividade(atividadeAtual.id);
        
        mudarPersonagems()

    }else if(concluir === ""){

        alert("Preencha o campo destacado com sua senha de atividades")
        return;

    }else if(concluir !== usuario.senhaAdm && tentativas == 5){

        alert("Muitas tentativas detectadas. Espere alguns minutos para tentar novamente")
        return;

    }else if(concluir !== usuario.senhaAdm){

        alert("Senha incorreta")
        tentativas ++;
        console.log(tentativas);
        return(tentativas);

    }else{

        alert("Um erro ocorreu")
        return;

    }



}

function mudarAtividade(){

    const mudarPersonagems = document.getElementById("personagems");
    const mudarAtividade = document.getElementById("atividade");
    const mudarAtividade_grande = document.getElementById("atividade_grande");
    

    mudarAtividade.style.display = "flex";
    mudarPersonagems.style.display = "none";
    mudarAtividade_grande.style.display = "none";

}

function mudarPersonagems(){

    const mudarPersonagems = document.getElementById("personagems");
    const mudarAtividade = document.getElementById("atividade");
    const mudarAtividade_grande = document.getElementById("atividade_grande");
    

    mudarAtividade.style.display = "none";
    mudarPersonagems.style.display = "flex";
    mudarAtividade_grande.style.display = "none";

}

function mudarAtividadeGrande(atividade){

     if (atividadeConcluida(atividade.id)) {

        alert("Essa atividade já foi concluída!");

        return;
    }

    const mudarPersonagems = document.getElementById("personagems");
    const mudarAtividade = document.getElementById("atividade");
    const mudarAtividade_grande = document.getElementById("atividade_grande");
    const mudarConteudo = document.getElementById("conteudo");
    const mudarConfirmarAtividade =document.getElementById("confirmar_atividade");
    const inputConf = document.getElementById("senha_conf");

    inputConf.value = "";


    mudarConteudo.style.display = "flex";
    mudarConfirmarAtividade.style.display = "none";
    mudarAtividade.style.display = "none";
    mudarPersonagems.style.display = "none";
    mudarAtividade_grande.style.display = "flex";

    preencherAtividadeGrande(atividade);

}

function mudarConfirmarAtividade(){

    const mudarConteudo = document.getElementById("conteudo");
    const mudarConfirmarAtividade =document.getElementById("confirmar_atividade")

    mudarConteudo.style.display = "none";
    mudarConfirmarAtividade.style.display = "flex";

}

function cancelarConfirmarAtividade(){

    const mudarConteudo = document.getElementById("conteudo");
    const mudarConfirmarAtividade =document.getElementById("confirmar_atividade")
    const inputConf = document.getElementById("senha_conf");

    inputConf.value = "";

    mudarConteudo.style.display = "flex";
    mudarConfirmarAtividade.style.display = "none";

}

function voltarVizinha(){

    window.location.href ="../pages/vizinhanca.html"

}

//---------------- PLAYER DE AUDIO ----------------

// Variaveis do player

const imgs_animacao = [
    "../acervo/personagens/melaine/Mel fala 2.png",
    "../acervo/personagens/melaine/Mel fala 3.png"
];

const img_padrao = "../acervo/personagens/melaine/Mel fala 1.png"

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

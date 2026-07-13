const dados = localStorage.getItem("usuario");

let usuario = null;

if (dados && dados !== "undefined") {
    usuario = JSON.parse(dados);
}

console.log(usuario);

let valbtn = 0;

document.addEventListener('DOMContentLoaded', function(){

    const nome = document.getElementById("nome");
    const pronome = usuario.pronome;

    if (pronome === "ela"){

        nome.innerHTML = `Seja bem vinda: <b>${usuario.crianca}</b>!`;

    }else if(pronome === "ele" || pronome === "nenhum"){

        nome.innerHTML = `Seja bem vindo: <b>${usuario.crianca}</b>!`;

    }



});






document.addEventListener('keydown', function() {
    const intro = document.getElementById('intro');
    if (intro.style.display !== 'none') {
        tocarIntro();
    }
});

document.getElementById('intro').addEventListener('click', function() {
    tocarIntro();
});

function tocarIntro() {
    const intro = document.getElementById('intro');

    intro.style.opacity = '0';
    setTimeout(() => {
        intro.style.display = 'none';
    }, 500);
    document.body.style.overflow = "auto";

    

}

function existeUsuario(){

    return localStorage.getItem("usuario") !== null;

}

function cadastro(){

    window.location.href = "../front/pages/cadastro.html";

}

function paginaUsuario(){

    if (existeUsuario()){

        if (usuario.logado === true){

            window.location.href = "../front/pages/usuario.html"

        }else{

            window.location.href = "../front/pages/cadastro.html"

        }

    }else{

        window.location.href = "../front/pages/cadastro.html"
        
    }

    

}

function vizinha(){

    window.location.href = "../front/pages/vizinhanca.html"

}

function sobre(){

    window.location.href = "../front/pages/sobre.html"

}

function comentario(){

    window.location.href = "../front/pages/comentarios.html"

}

function novidades(){

    window.location.href = "../front/pages/novidades.html"

}

function botaoIn(){

    switch (valbtn){

        case 1:
        const texto1 = document.getElementById("entrarTexto");
        texto1.style.display = "block"
        break

        case 2:
        const texto2 = document.getElementById("tarefaTexto");
        texto2.style.display = "block"
        break

        case 3:
        const texto3 = document.getElementById("ruaTexto");
        texto3.style.display = "block"
        break

        case 4:
        const texto4 = document.getElementById("novidadesTexto");
        texto4.style.display = "block"
        break

        case 5:
        const texto5 = document.getElementById("comentariosTexto");
        texto5.style.display = "block"
        break

        case 6:
        const texto6 = document.getElementById("sobreTexto");
        texto6.style.display = "block"
        break


    }

}

function botaoOut(){

    const textos = document.querySelectorAll(".textoBotao");
    textos.forEach(el => {
        el.style.display = "none"

    })

}
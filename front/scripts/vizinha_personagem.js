let personagem = 0;

function entraCasa(){

    switch (personagem){

        case 1:
            window.location.href = "../pages/mel.html"
        break

        case 2:
            window.location.href = "../pages/milo.html"
        break
        case 3:
            window.location.href = "../pages/moon.html"
        break
        case 4:
            window.location.href = "../pages/kiki.html"
        break
        case 5:
            window.location.href = "../pages/mia.html"
        break
    }

}

function voltar(){

    window.location.href = "../index.html"

}

function voltarVizinha(){

    window.location.href ="../pages/vizinhanca.html"

}

function voltarHover(){

    const texto = document.getElementById("voltar");
    texto.style.display = "flex";

}

function voltarOut(){

    const texto = document.getElementById("voltar");
    texto.style.display = "none";

}


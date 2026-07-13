const dados = localStorage.getItem("usuario");

let usuario = null;

if (dados && dados !== "undefined") {
    usuario = JSON.parse(dados);
}

console.log(usuario);

async function carregarComentarios() {

    const resposta = await fetch("../dados/comentarios.json");

    return await resposta.json();

}





async function carregarAtividades() {

    const resposta = await fetch("../dados/atividades.json");

    return await resposta.json();
}

async function iniciar() {

    const dados = await carregarComentarios();

    const comentariosLocais = JSON.parse(
        localStorage.getItem("comentarios")
    ) || [];

    console.log(dados);

    const todosComentarios = [
    ...dados.comentarios,
    ...comentariosLocais
    ];

    const lista = document.getElementById("lista");

    todosComentarios.forEach((comentario) => {


        const novoComentario = document.createElement("div");
        const titulo = document.createElement("h3");
        const topicos = document.createElement("div");
        const usuario = document.createElement("p");
        const atividade = document.createElement("p");
        const texto = document.createElement("p");

        titulo.textContent = comentario.titulo;
        usuario.textContent = "• " + comentario.usuario;
        atividade.textContent = "• " + comentario.atividade;
        texto.textContent = comentario.texto;


        novoComentario.classList.add("comentario");
        titulo.classList.add("cmTitulo");
        topicos.classList.add("cmTopicos");
        usuario.classList.add("cmTopico");
        atividade.classList.add("cmTopico");
        texto.classList.add("cmTexto");


        lista.appendChild(novoComentario);
        novoComentario.appendChild(titulo);
        novoComentario.appendChild(topicos);
        topicos.appendChild(usuario);
        topicos.appendChild(atividade);
        novoComentario.appendChild(texto);

    });

}

async function preencherSelectAtividades() {

    const dados = await carregarAtividades();

    const select = document.getElementById("atividade");

    dados.atividades.forEach((atividade) => {

        const option = document.createElement("option");

        option.value = atividade.titulo;
        option.textContent = atividade.titulo;

        select.appendChild(option);

    });

}

function enviarComentario() {

    const titulo = document.getElementById("tituloCm").value.trim();
    const atividade = document.getElementById("atividade").value;
    const texto = document.getElementById("descricao").value.trim();

    if (titulo === "" || texto === "") {

        alert("Preencha todos os campos.");

        return;

    }

    const comentario = {

        titulo: titulo,
        usuario: usuario.usuario,
        atividade: atividade,
        texto: texto

    };

    console.log(comentario)

    let comentarios = JSON.parse(
        localStorage.getItem("comentarios")
    ) || [];

    comentarios.push(comentario);

    localStorage.setItem(
        "comentarios",
        JSON.stringify(comentarios)
    );

    alert("Comentário enviado!");
    document.getElementById("tituloCm").value = "";
    document.getElementById("atividade").selectedIndex = 0;
    document.getElementById("descricao").value = "";

    lista.innerHTML = "";
    iniciar();

}

iniciar();

preencherSelectAtividades();
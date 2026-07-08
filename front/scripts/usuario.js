const dados = localStorage.getItem("usuario");

let usuario = null;

if (dados && dados !== "undefined") {
    usuario = JSON.parse(dados);
}

console.log(usuario);


function voltar(){

    window.location.href = ("../index.html");

}

function preencherUsuario(){

    const nome = document.getElementById("nome");
    const responsavel = document.getElementById("usuario");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const crianca = document.getElementById("crianca");
    const idade = document.getElementById("idade");
    const estado = document.getElementById("estado");
    const cor = document.getElementById("cor");
    const comida = document.getElementById("comida");
    const generoLit = document.getElementById("generoLit");


    nome.innerHTML = `Olá: ${usuario.usuario}`;
    responsavel.innerHTML = `Nome do responsavel: ${usuario.usuario}`;
    email.innerHTML = `Email: ${usuario.email}`;
    cpf.innerHTML = `CPF: ${usuario.cpf}`;
    crianca.innerHTML = `Nome da criança: ${usuario.crianca}`;
    idade.innerHTML = `Idade: ${usuario.idade}`;
    estado.innerHTML = `Estado: ${usuario.estado}`;
    cor.innerHTML = `Cor favorita: ${usuario.cor}`;
    comida.innerHTML = `Comida favorita: ${usuario.comida}`;
    generoLit.innerHTML = `Genero leterario favorito: ${usuario.generoLit}`;

}

function salvar(){

    const novosValores = {
        usuario: document.getElementById("novoUsuario").value,
        email: document.getElementById("novoEmail").value,
        cpf: document.getElementById("novoCpf").value,
        crianca: document.getElementById("novaCrianca").value,
        estado: document.getElementById("novoEstado").value,
        cor: document.getElementById("novaCor").value,
        comida: document.getElementById("novaComida").value,
        generoLit: document.getElementById("novoGeneroLit").value
    }

    const novaIdade = document.getElementById("novaIdade").value;

    console.log(novosValores)

    if (novaIdade !== "") {
        if(novaIdade < 3 || novaIdade > 18){

        alert("Coloque uma idade valida (3 - 18)");
        return;

        }else{
            usuario.idade = +novaIdade;
        }

    }

    for (const chave in novosValores) {
    if (novosValores[chave].trim() !== "") {
        usuario[chave] = novosValores[chave];
        }
    }

    alert("Cadastro atualizado com sucesso!")

    localStorage.setItem("usuario", JSON.stringify(usuario));
    console.log(usuario)
    preencherUsuario()

}

const borrar = document.getElementById("borrar");

function entrarDel(){

    borrar.style.display = "flex";

}

function cancelarDel(){

    borrar.style.display = "none";    

}

function deletar(){

    const confirmacao = document.getElementById("deletar").value;

    if (confirmacao !== "DELETAR"){

        alert("Escreva o texto exatamente igual o exemplo");
        return;

    }else if (confirmacao === "DELETAR"){

        alert("Cadastro excluido com sucesso!")
        localStorage.removeItem("usuario");
        window.location.href = "../index.html"

    }





}

addEventListener('DOMContentLoaded', () => {

    preencherUsuario()

})
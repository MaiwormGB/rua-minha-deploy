const usuario = {

    usuario:"",
    senha:"",
    email:"",
    cpf:"",
    senhaAdm:"",
    pronome:"",
    acessibilidade: false,
    crianca:"",
    idade:0,
    estado:"",
    cor:"",
    comida:"",
    generoLit:"",
    logado: false

}

const dadosSalvos = JSON.parse(localStorage.getItem("usuario"));

if (dadosSalvos) {
    Object.assign(usuario, dadosSalvos);
}

console.log(usuario);

function logar(){

    const logarUsuario = document.getElementById("logarUsuario").value;
    const logarSenha = document.getElementById("logarSenha").value;

    if (usuario.logado !== false){

        alert("Você já está logado");
        return;

    }else if (logarUsuario === "" || logarSenha === ""){

        alert("Preencha os campos corretamente");
        return;

    }else if (logarSenha === usuario.senha && logarUsuario === usuario.usuario || logarUsuario === usuario.email ){

        alert("Login efetuado")
        usuario.logado = true;
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "../index.html"
        
    }else{

        alert("Usuario ou senha incorretos");

    }

}

function cadastrar(){

    if (dadosSalvos) {
    alert("Você já tem um cadastro");
    return;
    } 

    const novoUsuario = document.getElementById("novoUsuario").value;
    const novaSenha = document.getElementById("novaSenha").value;
    const novoEmail = document.getElementById("novoEmail").value;
    const novoCpf = document.getElementById("novoCpf").value;
    const novaSenhaAdm = document.getElementById("novaSenhaAdm").value;
    const novoPronome = document.getElementById("novoPronome").value;
    const novaAcessibilidade = document.getElementById("novaAcessibilidade");
    const novaCrianca = document.getElementById("novaCrianca").value;
    const novaIdade = document.getElementById("novaIdade").value;
    const novoEstado = document.getElementById("novoEstado").value;
    const novaCor = document.getElementById("novaCor").value;
    const novaComida = document.getElementById("novaComida").value;
    const novoGeneroLit = document.getElementById("novoGeneroLit").value;

    if (
        novoUsuario === "" ||
        novaSenha === "" ||
        novoEmail === "" ||
        novoCpf === "" ||
        novaSenhaAdm === "" ||
        novoPronome === "" ||
        novaCrianca === "" ||
        novaIdade === "" ||
        novoEstado === "" ||
        novaCor === "" ||
        novaComida === "" ||
        novoGeneroLit === ""
    ) {

    alert("Preencha todos os campos.");
    return;

    }else if(novaIdade < 3 || novaIdade > 99){

    alert("Coloque uma idade valida (3 - 99)");
    return;

    }
    
    usuario.usuario = novoUsuario;
    usuario.senha = novaSenha;
    usuario.email = novoEmail;
    usuario.cpf = novoCpf;
    usuario.senhaAdm = novaSenhaAdm;
    usuario.pronome = novoPronome;

    if (novaAcessibilidade.checked){

        usuario.acessibilidade = true;

    }else{

        usuario.acessibilidade = false;

    }

    usuario.crianca = novaCrianca;
    usuario.idade = +novaIdade;
    usuario.estado = novoEstado;
    usuario.cor = novaCor;
    usuario.comida = novaComida;
    usuario.generoLit = novoGeneroLit;

    alert("Cadastro efetuado com sucesso!")

    localStorage.setItem("usuario", JSON.stringify(usuario));

    voltarLogin()

    console.log(usuario);
}
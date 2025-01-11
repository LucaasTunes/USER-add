class Usuario {
    constructor(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
}

let usuarios = [];

function cadastrarUsuario() {
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;

    if (nome && idade && email) {
        let usuario = new Usuario(nome, idade, email);
        usuarios.push(usuario);
        alert("Usuário cadastrado com sucesso!");
        limparCampos();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function listarUsuarios() {
    let usuariosList = document.getElementById("usuariosList");
    usuariosList.innerHTML = "";  // Limpa a lista antes de exibir

    if (usuarios.length === 0) {
        usuariosList.innerHTML = "<p>Nenhum usuário cadastrado!</p>";
    } else {
        let lista = "<ul>";
        usuarios.forEach((usuario) => {
            lista += `<li>Nome: ${usuario.nome}, Idade: ${usuario.idade}, Email: ${usuario.email}</li>`;
        });
        lista += "</ul>";
        usuariosList.innerHTML = lista;
    }
}

function limparCampos() {
    document.getElementById("nome").value = '';
    document.getElementById("idade").value = '';
    document.getElementById("email").value = '';
}

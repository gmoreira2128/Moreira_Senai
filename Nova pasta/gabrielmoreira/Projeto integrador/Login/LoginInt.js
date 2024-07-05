document.getElementById('login').addEventListener('click', function() {
    var emailDigitado = document.getElementById('email-login').value;
    var senhaDigitada = document.getElementById('senha-login').value;

    var emailPadrao = "exemplo@email.com";
    var senhaPadrao = "senha123";

    if (emailDigitado === '' || senhaDigitada === '') {
        alert("Preencha todos os campos");
        return;
    }

    if (emailDigitado === emailPadrao && senhaDigitada === senhaPadrao) {
        console.log("Login realizado");
        document.getElementById('mensagem-sucesso').innerHTML = "Login realizado com sucesso";
        document.getElementById('mensagem-falha').innerHTML = ""; // Limpa a mensagem de falha se houver
        redirecionaHome(); // Chama a função de redirecionamento somente se o login for bem-sucedido
    } else {
        console.log("Login não realizado");
        document.getElementById('mensagem-sucesso').innerHTML = ""; // Limpa a mensagem de sucesso se houver
        document.getElementById('mensagem-falha').innerHTML = "Login ou senha inválidos";
    }
});

function redirecionaHome() {
    window.location.href = "../pag-inicial/home.html";
}

document.getElementById('cadastros').addEventListener('click', function() {
    window.location.href = "../cadastro/cadastro.html";
});

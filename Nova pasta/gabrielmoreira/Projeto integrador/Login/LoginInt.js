
document.getElementById('login').addEventListener('click', function() {
    var emailDigitado = document.getElementById('email-login').value;
    var senhaDigitada = document.getElementById('senha-login').value;

    var emailPadrao = "exemplo@email.com";
    var senhaPadrao = "senha123";

    if (emailDigitado === emailPadrao && senhaDigitada === senhaPadrao) {
        console.log("Login realizado");
        document.getElementById('mensagem-sucesso').innerHTML = "Login realizado com sucesso";
        document.getElementById('mensagem-falha').innerHTML = ""; // Limpa a mensagem de falha se houver
    } else {
        console.log("Login não realizado");
        document.getElementById('mensagem-sucesso').innerHTML = ""; // Limpa a mensagem de sucesso se houver
        document.getElementById('mensagem-falha').innerHTML = "Login ou senha inválidos";
    }
});

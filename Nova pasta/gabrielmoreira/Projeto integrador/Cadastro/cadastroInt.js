document.getElementById('cad').addEventListener('click', function() {
    // Captura dos valores dos campos de entrada
    var nome = document.getElementById('nome').value.trim();
    var sobrenome = document.getElementById('sob-nome').value.trim();
    var cpf = document.getElementById('cpf').value.trim();
    var telefone = document.getElementById('tel').value.trim();
    var email = document.getElementById('email-login').value.trim();
    var senha = document.getElementById('senha-login').value;
    var confirmSenha = document.getElementById('confirm-senha').value;

    // Validar se todos os campos foram preenchidos
    if (nome === '' || sobrenome === '' || cpf === '' || telefone === '' || email === '' || senha === '' || confirmSenha === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    // Validar se as senhas coincidem
    if (senha !== confirmSenha) {
        alert('As senhas não coincidem. Por favor, verifique.');
        return;
    }


    alert('Cadastro realizado com sucesso!');
    window.location.href = '../pag-inicial/home.html'; // Redireciona para a página inicial após o cadastro
});

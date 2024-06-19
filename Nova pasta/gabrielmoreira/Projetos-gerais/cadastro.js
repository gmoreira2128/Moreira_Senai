document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.querySelector('.Nome-Cliente').value.trim();
    const sobrenome = document.querySelector('.Sobrenome-Cliente').value.trim();
    const endereco = document.querySelector('.Endereco-Cliente').value.trim();
    const telefone = document.querySelector('.Numero-Cliente').value.trim();
    const email = document.querySelector('.Email-Cliente').value.trim();
    const senha = document.querySelector('.Senha-Cliente').value.trim();

    if (!nome || !sobrenome || !endereco || !telefone || !email || !senha) {
        document.getElementById('errorMessage').style.display = 'block';
        return;
    }

    document.getElementById('errorMessage').style.display = 'none';
    window.open('Bem-vindo.html', '_blank');
});

document.getElementById('cancelButton').addEventListener('click', function() {
    window.open('login.html', '_blank');
});

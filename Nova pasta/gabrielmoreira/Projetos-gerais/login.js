document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const defaultUsername = 'usuario';
    const defaultPassword = 'senha123';

    if (username === defaultUsername && password === defaultPassword) {
        window.location.href = 'tela-inicial.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});

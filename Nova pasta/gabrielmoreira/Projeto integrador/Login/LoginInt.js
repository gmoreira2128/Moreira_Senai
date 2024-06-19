document.getElementById('').addEventListener('submit', function(event){
    event.preventDefault();

    const username = document.getElementById('User').value;
    const password = document.getElementById('password').value;


    const defaultUsername = 'User';
    const defaultPassword = 'senha123';

    if(username === defaultUsername && password === defaultPassword){
        window.location.href = 'Pagina-Inicial';
    }   else{
        document.getElementById
    }
})
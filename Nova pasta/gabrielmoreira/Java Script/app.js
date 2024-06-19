document.getElementById('btn').addEventListener('click', function(event){
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const defaultUsername = 'usuario1';
    const defaultPassword = 'senha2';


    if(defaultPassword == password && defaultUsername == username){
        document.getElementById('sucesso').innerHTML = "Login Realizado com sucesso";
    } else{
       document.getElementById('falha').innerHTML = "Falhou";
    }
})

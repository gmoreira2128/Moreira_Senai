document.getElementById('btn-menu').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle("active");
});

window.onclick = function(event) {
    if (!event.target.closest('#sidebar') && !event.target.closest('#btn-menu')) {
        var dropdowns = document.getElementsByClassName('sidebar');
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active'); 
            }
        }
    }
};


document.getElementById('login').addEventListener('click', function(){

    email1 = document.getElementById('email-login').value;
    senha1 = document.getElementById('senha-login').value;

    EmailPadrao = "exemplo@email.com";
    SenhaPadrao = "senha123";

    if(email1 === EmailPadrao && senha1 === SenhaPadrao){
        console.log("Login realizado");
        mensagem1 = document.getElementById('mensagem-sucesso').innerHTML = "Login realizado com sucesso";
        mensagem1.style.color = 'green';
    }
    else{
        console.log("Login não realizado");
    mensagem2 = document.getElementById('mensagem-falha').innerHTML = "Login ou senha invalido";
    mensagem2.style.color = 'red';
    }

});


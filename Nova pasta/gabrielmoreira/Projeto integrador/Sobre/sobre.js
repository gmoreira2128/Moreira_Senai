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

// Função para redirecionar para a página de login
function redirecionarParaLogin() {
    window.location.href = '../login/login.html';
}

// Adiciona um event listener a um botão para redirecionar ao login
document.getElementById('btn-user').addEventListener('click', redirecionarParaLogin);
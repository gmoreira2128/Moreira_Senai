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

document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.btn-insc');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            var curso = this.getAttribute('data-curso');
            var meusCursos = JSON.parse(localStorage.getItem('meusCursos')) || [];
            
            if (!meusCursos.includes(curso)) {
                meusCursos.push(curso);
                localStorage.setItem('meusCursos', JSON.stringify(meusCursos));
                alert(curso + ' foi adicionado aos seus cursos.');
            } else {
                alert(curso + ' já está nos seus cursos.');
            }
        });
    });
});

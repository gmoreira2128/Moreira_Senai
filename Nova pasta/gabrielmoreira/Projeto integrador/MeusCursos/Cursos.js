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

document.addEventListener('DOMContentLoaded', function() {
    var meusCursos = JSON.parse(localStorage.getItem('meusCursos')) || [];
    var container = document.getElementById('meus-cursos');
    
    if (meusCursos.length > 0) {
        meusCursos.forEach(function(curso) {
            var cursoDiv = document.createElement('div');
            cursoDiv.className = 'curso';
            
            var cursoNome = document.createElement('span');
            cursoNome.textContent = curso;
            
            var removerBtn = document.createElement('button');
            removerBtn.textContent = 'Remover';
            removerBtn.addEventListener('click', function() {
                removerCurso(curso);
            });
            
            cursoDiv.appendChild(cursoNome);
            cursoDiv.appendChild(removerBtn);
            container.appendChild(cursoDiv);
        });
    } else {
        container.textContent = 'Você não tem cursos inscritos.';
    }
});

function removerCurso(curso) {
    var meusCursos = JSON.parse(localStorage.getItem('meusCursos')) || [];
    var index = meusCursos.indexOf(curso);
    if (index !== -1) {
        meusCursos.splice(index, 1);
        localStorage.setItem('meusCursos', JSON.stringify(meusCursos));
        location.reload(); // Recarrega a página para atualizar a lista
    }
}

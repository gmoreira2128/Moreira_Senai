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


document.getElementById('enviar-arq').addEventListener('click', function() {
    console.log("Estou aqui");

    var nome = document.getElementById('name').value;
    var emailCandidato = document.getElementById('email-candidato').value;
    var telefone = document.getElementById('tel-candidato').value;

    if(nome === '' || emailCandidato === '' || telefone === '') {
        alert('Preencha todos os campos');
        return;
    }

    var mensagemDeuCerto = document.getElementById('mensagem-enviada');
    mensagemDeuCerto.innerHTML = "Currículo enviado com sucesso";
    mensagemDeuCerto.style.display = "flex";
});

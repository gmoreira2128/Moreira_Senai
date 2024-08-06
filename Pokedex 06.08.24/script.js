document.addEventListener('DOMContentLoaded', function () {
    let jsonData = [];
    let types = new Set();  // Para armazenar tipos únicos

    // Função para atualizar os cards com base na pesquisa e no filtro
    function updateCards() {
        const searchQuery = document.getElementById('pesquisa').value.toLowerCase().trim();
        const selectedType = document.getElementById('filtro-tipo').value;

        document.querySelectorAll('.card').forEach(card => {
            card.style.display = 'none'; // Ocultar todos os cards inicialmente
        });

        jsonData.forEach(pokemon => {
            const matchesSearch = pokemon.name.toLowerCase().includes(searchQuery);
            const matchesType = selectedType === '' || pokemon.type.includes(selectedType);

            if (matchesSearch && matchesType) {
                const card = document.querySelector(`.card[data-pokemon="${pokemon.name}"]`);
                if (card) {
                    card.style.display = 'block';

                    // Montar a descrição
                    const description = `
                        Nome: ${pokemon.name} <br>
                        Tipo: ${pokemon.type.join(', ')} <br>
                        Total: ${pokemon.stats.total} <br>
                        HP: ${pokemon.stats.hp} <br>
                        Ataque: ${pokemon.stats.attack} <br>
                        Defesa: ${pokemon.stats.defense} <br>
                        Ataque Especial: ${pokemon.stats['sp-atk']} <br>
                        Defesa Especial: ${pokemon.stats['sp-def']} <br>
                        Velocidade: ${pokemon.stats.speed}
                    `;
                    card.querySelector('.description').innerHTML = description;
                }
            }
        });

        if (searchQuery === '' && selectedType === '') {
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'block';
                card.querySelector('.description').innerHTML = '';
            });
        }
    }

    // Carregar o JSON e preencher o filtro
    fetch('pokedex.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            console.log(jsonData);

            // Preencher o menu suspenso com tipos únicos
            jsonData.forEach(pokemon => {
                pokemon.type.forEach(type => types.add(type));
            });

            const filterSelect = document.getElementById('filtro-tipo');
            types.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                filterSelect.appendChild(option);
            });

            // Inicialmente, exibir todos os cards
            document.querySelectorAll('.card').forEach(card => {
                card.style.display = 'block';
            });

            // Adicionar listeners
            document.getElementById('pesquisar').addEventListener('click', updateCards);
            document.getElementById('filtro-tipo').addEventListener('change', updateCards);
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});

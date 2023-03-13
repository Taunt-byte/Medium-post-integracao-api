const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;

    fetch(`https://api.github.com/search/repositories?q=${query}`)
        .then(response => response.json())
        .then(data => {
            resultsDiv.innerHTML = '';
            data.items.forEach(item => {
                const repositoryDiv = document.createElement('div');
                repositoryDiv.innerHTML = `
                    <h3>${item.full_name}</h3>
                    <p>${item.description}</p>
                    <a href="${item.html_url}" target="_blank">Acessar Repositório</a>
                `;
                resultsDiv.appendChild(repositoryDiv);
            });
        })
        .catch(error => console.error(error));
});

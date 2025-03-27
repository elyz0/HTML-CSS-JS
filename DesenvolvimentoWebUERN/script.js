document.getElementById('fetchButton').addEventListener('click', function() {
    const userId = document.getElementById('userId').value;
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            const user = users.find(user => user.id == userId);
            if (user) {
                document.getElementById('userInfo').innerHTML = `
                    <p>Nome: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                `;
            } else {
                document.getElementById('userInfo').innerHTML = `<p>Usuário não encontrado</p>`;
            }
        })
        .catch(error => console.error('Erro:', error));
});

const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

alert(email)

    fetch('/postardados', { // Sem o prefixo 'api'
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
    })
    .then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Erro na resposta do servidor.');
        }
    })
    .then((data) => {
        console.log('Dados enviados com sucesso:', data);
        alert('Dados enviados com sucesso!');
    })
    .catch((error) => {
        console.error('Erro ao enviar os dados:', error);
        alert('Erro ao enviar os dados. Por favor, tente novamente.');
    });
});

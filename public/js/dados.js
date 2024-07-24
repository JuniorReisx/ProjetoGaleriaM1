const form = document.getElementById('form');

form.addEventListener('submit', (event) => {

    event.preventDefault();


    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    fetch('/Dados',
        { method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ email, senha })})
        .then(() => {
            form.reset()
        })
        .catch(error => { console.error('Error: ', error) })

        window.location.href = "./galeria.html";

});

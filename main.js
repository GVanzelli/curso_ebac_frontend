/*B > A erro e sucesso*/

const form = document.getElementById('form');
let formValido = false;

function numbervalid (ValorA, ValorB){
    return ValorB > ValorA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let ValorA = document.getElementById('valor-A').value;
    let ValorB = document.getElementById('valor-B').value;

    const mensagemSucesso = 'Formulário válido, o valor B é maior que o valor A';
    const containerMensagemSucesso = document.querySelector('.success-message');
    
    formValido = numbervalid(ValorA, ValorB);

    if (formValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        ValorA.value = '';
        ValorB.value = '';
    } else {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'block';
        containerMensagemSucesso.style.display ='none';
    }
})


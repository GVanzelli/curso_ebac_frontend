$(document).ready(function () {
    $('.item button').click(function () {
        $(this).parent().append('<span class="container mensagem">Item adicionado ao carrinho</span>');
        $('.mensagem').fadeOut(2000);
    });
});
/*O código a cima é só para ter uma resposta ao usuário que o botão está funcionando, porém ainda não foi terminado a estilização dele, o intuito é só para ajudar a compreensão do site*/

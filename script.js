const botao = document.querySelector('button');

botao.addEventListener('click', () => {
    console.log('Botão clicado!');

    let texto = botao.querySelector('span');
    texto.textContent++;
})
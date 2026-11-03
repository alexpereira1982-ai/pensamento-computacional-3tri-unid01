//Capturando o elementro "button" do HTML e armazenando-o na constante "botao"
const botoes = document.querySelectorAll('button');

//Adicionando um evento de clique ao botão, que incrementa o valor do texto dentro do elemento "span" a cada clique
botoes.forEach((botao) => {
    let curtiu = false;
    botao.addEventListener('click', () => {
        console.log('Botão clicado!');
        let texto = botao.querySelector('span');

        if (curtiu) {
            texto.textContent--;
            curtiu = false;
        } else {
            texto.textContent++;
            curtiu = true;
        }
    })
})      
const audio = document.getElementById('audio')

    audio.addEventListener('click', () => {
        const musica = document.getElementById('som')
        musica.play()

            const login = document.querySelector('.audio')
            login.style.display = 'none'

                const main = document.querySelector('main')
                const header = document.querySelector('header')
                header.style.display = 'flex'
                main.style.display = 'flex'

    })


// Função para verificar e atualizar o estilo do elemento com base na largura da página
function ajustarEstiloDeExibicao() {
    // Obtém a largura da viewport
    var larguraDaPagina = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Obtém a referência para o elemento com o ID "main"
    var main = document.querySelector("main");

    // Verifica se a largura da página é menor que 768 pixels
    if (larguraDaPagina < 768) {
        // Se verdadeiro, define o estilo de exibição para 'grid'
        main.style.display = 'grid';
    } else {
        // Caso contrário, define o estilo de exibição para outro valor desejado
        main.style.display = 'flex'; // ou qualquer outro valor desejado
    }
}

// Chama a função ao carregar a página e quando a largura da janela é redimensionada
audio.addEventListener('click', () => {
    window.onload = window.onresize = ajustarEstiloDeExibicao;
})

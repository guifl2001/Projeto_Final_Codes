var pesquisas = ['lojas', 'produto']

document.addEventListener("DOMContentLoaded", function(event){
    // seleciona os elementos a serem usados
    const list = document.querySelector(".promo-produtos");
    const listitems = list.querySelectorAll("li");
    var currentLI = 0;
    for (var currentLI = 0; currentLI < 2 ; currentLI++){
        listitems[currentLI].classList.remove("displaynone");
        listitems[currentLI].classList.add("highlight");
    };

    const seta_direita = document.querySelector('.direita');
    const seta_esquerda = document.querySelector('.esquerda');

    seta_direita.addEventListener('click', function(event){
        if (currentLI < listitems.length) {
            // Tira do primeiro
            listitems[currentLI - 2].classList.remove("highlight");
            listitems[currentLI- 2].classList.add("displaynone");

            currentLI += 1;

            // Coloca na prox
            listitems[currentLI-1].classList.remove("displaynone");
            listitems[currentLI-1].classList.add("highlight");
        }
        if (currentLI > 2){
            seta_esquerda.classList.remove("displaynone");
        }else {
            seta_esquerda.classList.add('displaynone');
        }
    });

    seta_esquerda.addEventListener('click', function(event){
        if (currentLI > 2){
            // Tira do primeiro
            listitems[currentLI - 1].classList.remove("highlight");
            listitems[currentLI- 1].classList.add("displaynone");

            currentLI -= 1;

            // Coloca na prox
            listitems[currentLI-2].classList.remove("displaynone");
            listitems[currentLI-2].classList.add("highlight");
        }
        if (currentLI > 2){
            seta_esquerda.classList.remove("displaynone");
        }else {
            seta_esquerda.classList.add('displaynone');
        }
    });
    // Pesquisa para o fluxo de tela
    function pesquisa (algo){
        // diajd
        
    }
});
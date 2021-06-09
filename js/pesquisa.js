var pesquisas = ['lojas', 'produto']

document.addEventListener("DOMContentLoaded", function(event){
    console.log('foi');
    const list = document.querySelector(".promo-produtos");
    const listitems = list.querySelectorAll("li");
    console.log(listitems[0]);
    var currentLI = 0;
    for (var currentLI = 0; currentLI < 2 ; currentLI++){
        listitems[currentLI].classList.remove("displaynone");
        listitems[currentLI].classList.add("highlight");
    };

    const seta = document.querySelector('.seta');
    seta.addEventListener('click', function(event){
        if (currentLI < listitems.length) {
            // Tira do primeiro
            listitems[currentLI - 2].classList.remove("highlight");
            listitems[currentLI- 2].classList.add("displaynone");

            currentLI += 1;

            // Coloca na prox
            listitems[currentLI-1].classList.remove("displaynone");
            listitems[currentLI-1].classList.add("highlight");
        }
    });
});
function filtrarProjetos(tag){

    const projetos = document.querySelectorAll(".cartao-projeto");

    projetos.forEach(projeto => {

        const tags = projeto.dataset.tags;

        if(tag === "all" || tags.includes(tag)){
            projeto.style.display = "block";
        }
        else{
            projeto.style.display = "none";
        }

    });

}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.perfil-container');
    const navbar = document.getElementById('navbar');
    
    // Se a rolagem (scrollY) for maior que a altura do cabeçalho, transforma a barra
    if (window.scrollY > header.offsetHeight) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
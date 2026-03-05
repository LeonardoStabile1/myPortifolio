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

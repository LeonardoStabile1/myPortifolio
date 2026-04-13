document.addEventListener("DOMContentLoaded", () => {
    // Lógica para animar os elementos surgindo na tela
    const observerElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 
    });

    observerElements.forEach(el => observer.observe(el));
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.projeto__card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-animado');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px 0px -10% 0px' 
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});
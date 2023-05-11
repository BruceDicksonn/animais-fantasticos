export default function initScrollSuave(){
    function scrollToSection(event) {
        event.preventDefault();
    
        const href = this.getAttribute('href');
        const section = document.querySelector(href);
    
        // Forma Alternativa
        // scrollTo({
        //     top: section.offsetTop,
        //     behavior: "smooth"
        // });
    
        // Forma Top das galáxias
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    
    }
    
    const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');
    linksInternos.forEach(link => link.addEventListener('click',scrollToSection));
}
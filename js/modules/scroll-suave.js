export default class ScrollSuave{

    constructor(links, options){
        this.linksInternos = document.querySelectorAll(links);
        if(options === undefined){
            this.options = {behavior: 'smooth', block: 'start'}
        } else {
            this.options = options;
        }

        // um ótimo caso de uso para o bind, usamos bind porque o this.options na função faz referência ao elemento que disparou o evento e não a classe ScrollSuave
        this.scrollToSection = this.scrollToSection.bind(this);

    }

    scrollToSection(event) {
        event.preventDefault();
    
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        section.scrollIntoView(this.options)
    
    }

    init() {
        if(this.linksInternos.length){
            this.addLinkEvent();
        }
        return this;
    }

    addLinkEvent(){
        this.linksInternos.forEach(link => link.addEventListener('click',this.scrollToSection));
    }

}
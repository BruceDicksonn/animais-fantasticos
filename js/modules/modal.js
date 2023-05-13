export default class Modal {

    constructor(botaoAbrir, botaoFechar, containerModal){
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.clickOutsideModal = this.clickOutsideModal.bind(this);

    }

    toggleModal() {
        this.containerModal.classList.toggle('ativo');
    }

    eventToggleModal(e) {
        e.preventDefault();
        this.toggleModal();
    }
    
    clickOutsideModal(e){
        if(e.target === this.containerModal) this.toggleModal(e);
    }

    addModalEvents(){

        this.botaoAbrir.addEventListener('click', this.eventToggleModal);
        this.botaoFechar.addEventListener('click', this.eventToggleModal);
        this.containerModal.addEventListener('click', this.clickOutsideModal);

    }

    init(){

        if(this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }

}
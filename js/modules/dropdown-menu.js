import outsideClick from './outside-click.js';

export default function initDropdownMenu(){

    const dropdownMenus = document.querySelectorAll('[data-dropdown]');

    function handleClick(event) {
        event.preventDefault();
    
        this.classList.add('active');
    
        outsideClick(this, ['touchstart','click'] , () => {
            this.classList.remove('active');
        });
        
    }

    dropdownMenus.forEach(menu => {
    
        /* forma de adicionar a mesma callback para n listeners */ 
        ['touchstart','click'].forEach(userEvent => {
            menu.addEventListener(userEvent, handleClick);
        });

    });
    
}
import outsideClick from './outside-click.js';

export default class DropdownMenu {

    constructor(dropdownMenus, events){
        
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
        this.activeClass = 'active';

        if(events === undefined) this.events = ['touchstart','click'];
        else this.events = events

    }

    activeDropdownMenu(event) {
        event.preventDefault();
        const target = event.currentTarget;
    
        target.classList.add(this.activeClass);
    
        outsideClick(target, this.events , () => {
            target.classList.remove(this.activeClass);
        });
        
    }

    addDropdownMenusEvent(){
        this.dropdownMenus.forEach(menu => {
        
            /* forma de adicionar a mesma callback para n listeners */ 
            this.events.forEach(userEvent => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
            });
    
        });
    }

    init(){
        if(this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }

    
}
export default class Tooltip{

    constructor(tooltips){

        this.tooltips = document.querySelectorAll(tooltips);

        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);

    }

    onMouseMove(e){
        this.tooltipBox.style.top =  `${e.pageY + 20}px`;
        if(e.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${e.pageX - 200}px`;
        } else {
            this.tooltipBox.style.left = `${e.pageX + 20}px`;
        }
    }

    onMouseLeave(event){
    
        this.tooltipBox.remove(); // apaga esse elemento do DOM

        event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
        event.currentTarget.removeEventListener('mousemove',this.onMouseMove);
        // remove os events da pilha de eventos registrados no elemento

    }

    criarTooltipBox(content) {

        const tooltipBox = document.createElement('div');
        
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = content;
        document.body.appendChild(tooltipBox);
    
        this.tooltipBox = tooltipBox;

    }

    onMouseOver(event) {
    
        this.criarTooltipBox(event.currentTarget.ariaLabel);
    
        event.currentTarget.addEventListener('mousemove', this.onMouseMove);
        event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
    
    }

    addTooltipsEvent(){
        this.tooltips.forEach(item => {
            item.addEventListener('mouseover', this.onMouseOver);
        });
    }

    init(){
        if(this.tooltips.length) this.addTooltipsEvent();
        return this;
    }

}
export default function initTooltip(){

    const tooltips = document.querySelectorAll('[data-tooltip]');

    function criarTooltipBox(content) {

        const tooltipBox = document.createElement('div');
        
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = content;
        document.body.appendChild(tooltipBox);
    
        return tooltipBox;

    }

    const onMouseMove = {
        handleEvent(e){
            this.tooltipBox.style.top =  `${e.pageY + 20}px`;
            this.tooltipBox.style.left = `${e.pageX + 20}px`;
        }
    }

    const onMouseLeave = {
        handleEvent(){

            this.tooltipBox.remove(); // apaga esse elemento do DOM
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove',onMouseMove);
            // remove os events da pilha de eventos registrados no elemento

        }
    }
    
    function onMouseOver() {
    
        const tooltipBox = criarTooltipBox(this.ariaLabel);
    
        onMouseMove.tooltipBox = tooltipBox;
        this.addEventListener('mousemove', onMouseMove);
    
        onMouseLeave.tooltipBox = tooltipBox;
        onMouseLeave.element = this;
        this.addEventListener('mouseleave', onMouseLeave);
    
    }


    tooltips.forEach(item => {
        item.addEventListener('mouseover', onMouseOver);
    });

}
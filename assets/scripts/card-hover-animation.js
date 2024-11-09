const handleMouseEnter = (event) => {
    const element = event.currentTarget;
    element.classList.add('s-card--hovered');
    document.body.id = `${event.currentTarget.id}-hovered`;
}

const handleMouseLeave = (event) => {
    const element = event.currentTarget;
    element.classList.remove('s-card--hovered');
    document.body.id = ``;
}

const addEventListenerToCards = () => {
    const cardsElements = document.querySelectorAll('.s-card');
    cardsElements.forEach(card => {
       card.addEventListener('mouseenter', handleMouseEnter);
       card.addEventListener('mouseleave', handleMouseLeave);
    })
}

document.addEventListener('DOMContentLoaded', addEventListenerToCards, false);
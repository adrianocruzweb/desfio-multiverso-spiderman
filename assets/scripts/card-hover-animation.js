const handleMouseEnter = (event) => {
    const element = event.currentTarget;
    element.classList.add('s-card--hovered');
}

const handleMouseLeave = (event) => {
    const element = event.currentTarget;
    element.classList.remove('s-card--hovered');
}

const addEventListenerToCards = () => {
    const cardsElements = document.querySelectorAll('.s-card');
    cardsElements.forEach(card => {
       card.addEventListener('mouseenter', handleMouseEnter);
       card.addEventListener('mouseleave', handleMouseLeave);
    })
}

document.addEventListener('DOMContentLoaded', addEventListenerToCards, false);
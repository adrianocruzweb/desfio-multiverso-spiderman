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


const selectCarouselItem = (selectedItemElement) => {
    const selectedItem = selectedItemElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    const rotateYDeg = -120 * (Number(selectedItem) - 1)
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

    carousel.style.transform = newTransform;

    const activeButtonElement = document.querySelector('.s-controller__button--active');
    console.log(activeButtonElement);
    activeButtonElement.classList.remove('s-controller__button--active');

    selectedItemElement.classList.add('s-controller__button--active');
}
const searchParams = new URLSearchParams(window.location.search);

const spider = searchParams.get('spider')??'piderman-tobey';
const filme = searchParams.get('filme')??'movie-01';


const imgLogo = document.querySelector('.s-logo img');
if (imgLogo) {
    imgLogo.src = `../../assets/images/${spider}/${filme}/logo.png`;
}
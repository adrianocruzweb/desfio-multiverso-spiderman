const searchParams = new URLSearchParams(window.location.search);

const spider = searchParams.get('spider')??'piderman-tobey';
const filme = searchParams.get('filme')??'movie-01';


const imgLogo = document.querySelector('.s-logo img');
if (imgLogo) {
    imgLogo.src = `../../assets/images/${spider}/${filme}/logo.png`;
}

if(spider === 'spiderman-andrew'){
    const listaLinks = document.getElementById('listaLinks');
    listaLinks.removeChild(listaLinks.lastElementChild);
    console.log(listaLinks);
}

/*
https://github.com/adrianocruzweb/desfio-multiverso-spiderman

adicionei a troca de logo dinâmica mais vou trocar tudo dinamicamente por JS, não vai precisar replicar o arquivo da pagina interna. */
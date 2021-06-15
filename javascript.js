const personagens = document.querySelector('#personagens');
const numeroMaximoDePersonagens = 671;

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = () => {
    const id = generateRandomNumber();
    return fetch('http://rickandmortyapi.com/api/character/' + id)
    .then(
        (response) => response.json()
    )
        .then((data) => {
            
            let src = data.image;
            let img = "<img " + "src=\"" +src + "\">";
            let stringToHTML = img + "Nome:" + data.name;
            personagens.innerHTML+=stringToHTML;
                               
                        
        })
}
for(let i = 0; i < 4 ;i++){
    getCharacter();
}



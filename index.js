fetch('http://hp-api.herokuapp.com/api/characters')
    .then((res) => res.json())
    .then((characterData) => {
        allCharacters = characterData
    })

let headerPic = document.querySelector('.header-pic');
headerPic.addEventListener('dblclick', (e) => {
    headerPic.classList.toggle('switch-pic');
});

let allCharacters = [];

const dropdown = document.getElementById('house-dropdown');
dropdown.addEventListener('change', houseChangeEventHandler);

const ulArea = document.querySelector('ul');

function houseChangeEventHandler(e) {
    ulArea.innerHTML = '';
    ulCharacter.innerHTML = '';
    let selectedHouse = e.target.value;

    allCharacters.forEach(character => {
        if(character.house === selectedHouse){
            const ul = document.createElement('ul')
                ul.addEventListener('mouseover', e => e.target.style.color = 'purple')
                ul.addEventListener('mouseout', (e) => {
                    e.target.style.color = 'black';
                })
                ul.addEventListener('click', (e) => {
                    e.target.style.color = 'green';
                })
                ul.addEventListener('click', renderCharacterCard)

            ul.textContent = character.name
            ulArea.appendChild(ul)
        }
    })
}

function mouseoverPurple(e){
    e.target.style.color = "purple";
}

const character = []
let ulCharacter = document.getElementById('character-card')

function renderCharacterCard(e) { 
    let character = allCharacters.filter(character => character.name === e.target.outerText)[0];
    ulCharacter.innerHTML = ''


    const ul = document.createElement('ul')
    const img = document.createElement('img')
    const h3 = document.createElement('h3')
    const pHouse = document.createElement('p')
    const pPatronus = document.createElement('p')
    const pAncestry = document.createElement('p')
    
    img.id ='charPhotos'
    if(character.image === ''){
        img.src = 'https://m.media-amazon.com/images/I/91v4ui0Si7S._AC_SY606_.jpg'
    } else {
        img.src = `${character.image}`
    }
    h3.textContent = `${character.name}`
    pHouse.textContent = `House: ${character.house}`
    if(character.patronus === ''){
        pPatronus.textContent = 'Patronus: Unknown';
       } else {
        pPatronus.textContent = `Patronus: ${character.patronus.charAt(0).toUpperCase() + character.patronus.slice(1)}`
       }
    if(character.ancestry === ''){
        pAncestry.textContent = 'Ancestry: Unknown';
    } else {
    pAncestry.textContent = `Ancestry: ${character.ancestry.charAt(0).toUpperCase() + character.ancestry.slice(1)}`
    }

    ul.append(img, h3, pHouse, pPatronus, pAncestry)
    document.getElementById('character-card').append(ul)
    allCharacters.push(ul);
}
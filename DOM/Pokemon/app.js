// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
/*
const container = document.querySelector('#container');
const newImg = document.createElement('img');
let i = 1;
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
newImg.src = baseURL + `${i}.png`;
container.appendChild(newImg);
*/
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 151; i++) {
    const ne = document.createElement('img');
    ne.src = baseURL + `${i}.png`;
    const number = document.createElement('span');
    number.innerText = `#${i}`;
    const what = document.createElement('div');
    what.appendChild(ne);
    what.appendChild(number);
    container.appendChild(what);
    what.classList.add('pokemon');
}


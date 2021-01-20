// const btn = document.querySelector('button');
// const h1 = document.querySelector('h1');
// btn.addEventListener('click', function () {
//     const str = randomColor();
//     document.body.style.backgroundColor = str;
//     h1.innerText = str;
// });

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

const buttons = document.querySelectorAll('button');
for (let btn of buttons) {
    btn.addEventListener('click', colorize);
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    h1.addEventListener('click', colorize);
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
}
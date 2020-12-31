let para = document.getElementById('container');
for (let i = 0; i < 100; i++) {
    let b = document.createElement('button');
    b.innerText = "Hey!"
    para.appendChild(b);
}
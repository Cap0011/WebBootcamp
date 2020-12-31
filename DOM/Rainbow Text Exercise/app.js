const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
const sps = document.querySelectorAll('span');
for (let i = 0; i < sps.length; i++) {
    sps[i].style.color = colors[i];
}
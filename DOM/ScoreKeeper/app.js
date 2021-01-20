const btnP1 = document.querySelector('#btn_p1');
const btnP2 = document.querySelector('#btn_p2');
const btnReset = document.querySelector('#btn_reset');
const diP1 = document.querySelector('#p1');
const diP2 = document.querySelector('#p2');
const selectOpt = document.querySelector('#max');
let scoreP1 = 0;
let scoreP2 = 0;
let maxScore = 5;
let isOn = true;
selectOpt.addEventListener('change', function (e) {
    maxScore = parseInt(selectOpt.value);
    reset();
});
btnP1.addEventListener('click', function (e) {
    if (isOn) {
        scoreP1++;
        diP1.innerHTML = `${scoreP1}`
        if (scoreP1 === maxScore) {
            isOn = false
            diP1.classList.add('has-text-success');
            diP2.classList.add('has-text-danger');
            btnP1.disabled = true;
            btnP2.disabled = true;
        }
    }
});
btnP2.addEventListener('click', function (e) {
    if (isOn) {
        scoreP2++;
        diP2.innerHTML = `${scoreP2}`
        if (scoreP2 === maxScore) {
            isOn = false
            diP1.classList.add('has-text-danger');
            diP2.classList.add('has-text-success');
            btnP1.disabled = true;
            btnP2.disabled = true;
        }
    }
});
btnReset.addEventListener('click', reset);
function reset() {
    scoreP1 = 0;
    scoreP2 = 0;
    isOn = true;
    diP1.classList.remove('has-text-success', 'has-text-danger')
    diP2.classList.remove('has-text-success', 'has-text-danger')
    diP1.innerHTML = `${scoreP1}`
    diP2.innerHTML = `${scoreP2}`
    btnP1.disabled = false;
    btnP2.disabled = false;
}
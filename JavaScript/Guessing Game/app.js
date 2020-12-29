let n = parseInt(prompt("Welcome! enter you max number:"));
while (!n) {
    n = parseInt(prompt("Enter a valid number!"));
}
let guess = prompt("Enter your first guess:");
let rand = Math.floor(Math.random() * n) + 1;
let cnt = 1;
while (true) {
    cnt++;
    if (guess < rand) guess = (prompt("Too Low. Guess Again:"));
    else if (guess > rand) guess = (prompt("Too High. Guess Again:"));
    else if (guess === "q") {
        alert("quit game");
        break;
    }
    else {
        cnt--;
        alert("You got it!".toUpperCase());
        alert(`It took you ${cnt} guesses.`);
        break;
    }
}

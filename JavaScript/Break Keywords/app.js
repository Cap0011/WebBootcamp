let input = prompt("Hey, say something!");
while (true) {
    if (input.toLowerCase() === "stop copying me") break;
    input = prompt(input);
}
console.log("okay you win!");
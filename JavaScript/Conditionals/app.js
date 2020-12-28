
// let rand = Math.random();
// if (rand < 0.5) {
//     console.log("YOur number is less than 0.5!");
//     console.log(rand);
// } else {
//     console.log("YOur number is greater than 0.5!");
//     console.log(rand);
// }

// const dayOfWeek = prompt('Enter a day').toLowerCase();
// if (dayOfWeek === 'monday') console.log('I HATE MONDAY!');
// else if (dayOfWeek === 'saturday') console.log('I love SATURDAY!!!');
// else if (dayOfWeek === 'friday') console.log('Fridays are decent, especially after work!');
// else if (dayOfWeek === 'tuesday') console.log('Tuesday');
// else if (dayOfWeek === 'wednesday') console.log('Wednesday');
// else if (dayOfWeek === 'thursday') console.log('Thursday');
// else console.log('sunday');


// const age = 21;
// if (age <= 5) console.log("You are a baby. You get in for free!");
// else if (age <= 10) console.log("You are a child. You pay $10");
// else if (age <= 65) console.log("You are an adult. You pay $20");
// else console.log("You are a senior. You pay $10"); 

const password = prompt("please enter a new password");
if (password.length >= 6) {
    console.log("LONG ENOUGH PASSWORD!");
} else {
    console.log("PASSWORD TOO SHORT! MUST be 6+ characters");
}

if (password.indexOf(' ') === -1) console.log("Good job! No space!");
else console.log("Password cannot contain spaces!")
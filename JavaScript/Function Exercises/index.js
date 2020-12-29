//Heart Function Exercise
function printHeart() {
    console.log("<3");
}
printHeart();

//Rant Exercise
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

//Multiple Args Exercise
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) console.log("Snake Eyes!");
    else console.log("Not Snake Eyes!");
}

//Return Value Practice
function multiply(num1, num2) {
    return num1 * num2;
}

//isShortsWeather Function
function isShortsWeather(temperature) {
    if (temperature >= 75) return true;
    else return false;
}

//Last Element Exercise
function lastElement(arr) {
    if (arr.length > 0) return arr[arr.length - 1];
    else return null;
}

//Capitalize Exercise
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

//Sum Array Exercise
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

//Days Of The Week Exercise
function returnDay(num) {
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num < 1 || num > 7) return null;
    else return days[num - 1];
}

//Function Expression Exercise
let square = function (num) {
    return num * num;
}

//Methods Exercise
let square = {
    area: function (side) {
        return side * side;
    },
    perimeter: function (side) {
        return 4 * side;
    }
};

//Egg Laying Exercise
let hen = {
    name: 'Helen',
    eggCount: 0,
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};

//Map Practice
let cleanNames = function (arr) {
    return arr.map(function (i) {
        return i.trim();
    });
};

//Arrow Function Exercise
let greet = (str) => {
    return `Hey ${str}!`;
};

//Filter Exercise
let validUserNames = function (names) {
    return names.filter(u => u.length <= 10);
};
let validUserNames = names => (names.filter(u => u.length < 10));

//some, every Exercise
let allEvens = nums => (nums.every(num => num % 2 == 0));
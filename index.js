alert("Welcome this is a mini calculator for simple mathematical operations: You have to enter 2 numbers and a operational symbol");

function checkInput(input) {
    let num;
    do {
        num = prompt(input);
        if (isNaN(num) || num.trim() === "") {
            alert(num + " is not a number, please try again!");
        } else {
            return parseFloat(num);
        }
    } while (true);
}

let firstNumber =checkInput("Enter the first number:");


let secondNumber = checkInput("Enter the secont number:");


let operation;
do {
    operation = prompt("which operation you want to use? (+, -, *, /)");
    if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") {
        alert(operation + " is not an operational symbol. plese choose from the following: +, -, *, /.");
    }
} while (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/");


let result;


if (operation === "+") {
    result = firstNumber + secondNumber;
    alert("the sum of " + firstNumber +" & "+ secondNumber + " is: " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    alert("the difference of " + firstNumber +" & "+ secondNumber + " is: " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    alert("the moltiplcation of " + firstNumber +" & "+ secondNumber + " is: " + result);
} else if (operation === "/") {
    if (secondNumber !== 0) {
        result = firstNumber / secondNumber;
        alert("the division of " + firstNumber +" & "+ secondNumber + " is: " + result);
    } else {
        alert("Division with 0 is infinite.");
    }
}

alert("thank you for using the mini calculator!");

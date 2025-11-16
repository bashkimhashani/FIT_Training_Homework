const { use } = require("react");

// Request a user's age and define whether he/she is an infant (0–2), a child (3-11), a teen (12–18), an adult (19-60) or a senior citizen (60– ...). Print the result to the webpage as a paragraph.
let userAge = prompt("Enter your age: ") * 1;

if(userAge >= 0 && userAge <2) {
    console.log("You are a infant");
} else if(userAge >= 3 && userAge <=11) {
    console.log("You are a child");
}
else if(userAge >= 12 && userAge <=18) {
    console.log("You are a teen");
}
else if(userAge >= 19 && userAge <=60) {
    console.log("You are a adult");
}
else if(userAge > 60) {
    console.log("You are a senior citizen");
}else {
    console.log("Invalid age!");
}

// Request a number from 0 to 9 from a user and display the symbol that is placed on that keyboard button (for example, 1–!, 2–@, 3–# etc). Display a result in the console.

// Ask a user 3 questions, each with 3 answer options. The user gets 2 points for each correct answer. Show the earned points after the test.
let points = 0;

let question1 = parseInt(prompt("1 + 1= "));
if(question1 == 2 ) {
    question1 += 2;
}
let question2 = parseInt(prompt("2 + 2= "));
if(question1 == 4 ) {
    question1 += 2;
}
let question3 = parseInt(prompt("3 + 3= "));
if(question1 == 6 ) {
    question1 += 2;
}
// Request a number from a user, and define whether it is positive, negative, or zero. Display a resulting message as an alert. 

let x = parseInt(prompt("Enter a number [-inf, +inf]"));

if(x<0) {
    console.log("negative number");
}else if(x==0) {
    console.log("zero");
}else {
    console.log("positive number");
}



// Request a user's age and check whether it is realistic (0-120 y.o.). If it is realistic, display a message 'Hi! You are # years old', otherwise – 'Hm… Is it even possible?'.
let age1 = parseInt(prompt("enter your age: "));
if(age1 >0 && age1 <120) {
    console.log(`Hi! You are ${age1} years old`);
}else {
    console.log("Hmm SUS");
}

// Request a number from a user and type out its modulus (|7| = 7, |-7| = 7). Display a result in the console.

let number3 = parseInt(prompt("enter a nuber:"));

if (number3 < 0) {
    console.log(`|${number3}|= ${number3}`);
}else {
    console.log(`|${number3}|= ${number3}`);
}

// Request time from a user (hh:mm:ss) and check whether the data input is correct.

let h = parseInt(prompt("Enter hour:"));
let m = parseInt(prompt("Enter hour:"));
let s = parseInt(prompt("Enter hour:"));

let isValidH;
let isValidM;
let isValidS;

if(h > 0 && h <=24) {
    isValidH == true;
}else {
    isValidH == false;
}

if(m > 0 && m <60) {
    isValidM == true;
}else {
    isValidM == false;
}

if(s> 0 && s <60) {
    isValidS == true;
}else {
    isValidS == false;
}

// Request the coordinates of a point (x, y) and define the number of the quarter where that point is located. The options of the point being on one of the axis or at the origin should be included.
let x1 = parseInt(prompt("enter the x cord"));
let y1 = parseInt(prompt("enter the y cord"));

if(x1 > 0 && y1 > 0) {
    console.log("1-st quadrant");
}
else if(x1 < 0 && y1 > 0) {
    console.log("2-nd quadrant");
}
else if(x1 < 0 && y1 < 0) {
    console.log("3-rd quadrant");
}
else if (x1 > 0 && y1 < 0) {
    console.log("4-th quadrant");
}else if (x == 0 || y == 0) {
    console.log("In the axis");
}else {
    console.log("In the origin");
}

// Request a purchase sum from a user and show the sum to pay with a discount: from 200 tо 300 it would be 3%, from 300 to 500 – 5%, from 500 and above – 7%.


let price = parseInt(prompt("Money pls:"));
let total = price;

if (price >=200 && price <= 300) {
    total = price + (price * 0.03);
}
else if (price >=300 && price <= 500) {
    total = price + (price * 0.05);
}
else if (price >=500) {
    total = price + (price * 0.07);
}
console.log(`Total for ${price}: ${total}`);



//==================================================


// Tasks on SWITCH.
// const expr = "Papayas";
// switch (expr) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }

let value = 10;

switch(value) {
    case value < 100 :
        console.log("1");
    break;
    case value < 50 :
        console.log("2");
    break;
    case value <25 :
        console.log("3");
    break;
    case value <29 :
        console.log("4");
    break;
}


// Request a number of a month from a user. Print the name of the month to the webpage as a paragraph.

let userNumber = prompt("Ener a month of the number ");

switch(userNumber > 0 && userNumber <= 12) {
    case (userNumber == 1) : 
        console.log("January");
    break;
    case (userNumber == 2) : 
        console.log("Februry");
    break;
    case (userNumber == 3) : 
        console.log("January");
    break;
    case (userNumber == 4) : 
        console.log("January");
    break;
    case (userNumber == 5) : 
        console.log("January");
    break;
    case (userNumber == 6) : 
        console.log("January");
    break;
    case (userNumber == 7) : 
        console.log("January");
    break;
    case (userNumber == 8) : 
        console.log("January");
    break;
    case (userNumber == 9) : 
        console.log("January");
    break;
    case (userNumber == 10) : 
        console.log("January");
    break;
    case (userNumber == 11) : 
        console.log("January");
    break;
    case (userNumber == 12) : 
        console.log("January");
    break;
    
}

// Execute a calculator. A user puts in 2 numbers and a symbol (+ - * /). The program solves it depending on the symbol and shows the result.

let num1 = prompt("Enter first number: ") * 1;
let opt = prompt("Enter operator: ") * 1;
let num2 = prompt("Enter first number: ") * 1;

switch (opt) {
    case "+" :
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
    break;

    case "-" :
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
    break;

    case "*" :
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    break;

    case "/" :
        if(num2 === 0) {
            console.error("Number 2 cant be 0");
        }else {
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
    break;

    default: 
        console.log("Invalid operator: ");
}



// Tasks on ternary operator.
const age = 17;
const canVote = age >= 18 ? "yes" : "no";


// Request 2 numbers and display the larger one.

let a = prompt("num1");
let b = prompt("num2");

console.log(`The largest number is: ${a > b ? a : b}`);

// Request 1 number and check whether it is divisible by 5 or not. 
// Request the name of a planet. If a user types Earth or earth, the program displays "Hello, Earthling". In other cases, it displays "Hello, alien!".

let planet = prompt("Enter planet: ");

console.log(`${planet === "Earth" || planet === "earth" ? "hello earthling" : "Hello alien!"}`);

// Tasks on WHILE.
// let n = 0;

// while (n < 3) {
//   n++;
// }

// console.log(n);
// Display something to the console as many times as a user stated.

// A user types in a number, and all the numbers from it to 0 are displayed.

// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.
// Request 2 numbers and find all the common divisors.
// Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24.

// Tasks on DO WHILE.
// let result = "";
// let i = 0;

// do {
//   i += 1;
//   result += i;
// } while (i < 5);

// console.log(result);
// Suggest a user solve 2 + 2 * 2 until he/she does it right. 
// Store 1000 as a variable. Divide this variable by 2 while it is greater than 50. Display this number and how many divisions it took. 

// Tasks on FOR.
// let str = "";

// for (let i = 0; i < 9; i++) {
//   str += i;
// }

// console.log(str);
// Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the page. If a user types a negative number in, alert an error.
// Request a number from a user. Display all the numbers from 1 to 100 which are divisible by a given number.
// Put out every 4th element of a given range. A user states the min and max value in the range.
// Request a number and check whether it is prime. A prime number is divisible without a remainder by itself and 1.
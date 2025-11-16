// for(let i = 1; i < 3; i++) {

// }

// Tasks on WHILE.
// let n = 0;

// while (n < 3) {
//   n++;
// }

// console.log(n);

// Display something to the console as many times as a user stated.

// let times = prompt("Enter the number of repetitions!");


// A user types in a number, and all the numbers from it to 0 are displayed.

// Request a number and an extent. Raise the number to the given power and display the result. Do not use ** or Math.pow() here.

// let num1 =parseInt(prompt("enter an number")); 

// Request 2 numbers and find all the common divisors.
// Count the factorial of the number given by a user. For example, 4! is 1 * 2 * 3 * 4 = 24.

// let number5 = parseInt(prompt("Enter a number you want to factorial!"));
// let factorial = 1;
// while(number5 > 1) {
//     factorial = factorial * number5;
//     number5--;
// }

// console.log(factorial);

// Tasks on DO WHILE.
// let result = "";
// let i = 0;

// do {
//   i += 1;
//   result += i;
// } while (i < 5);

// console.log(result);
// Suggest a user solve 2 + 2 * 2 until he/she does it right. 

// let answer = parseInt(prompt);

// Store 1000 as a variable. Divide this variable by 2 while it is greater than 50. Display this number and how many divisions it took.

// Tasks on FOR.
// let str = "";

// for (let i = 0; i < 9; i++) {
//   str += i;
// }

// console.log(str);

// Count sheep. Request a non-negative integer, 3 for example, and print a string with a murmur: "1 sheep...2 sheep...3 sheep..." to the page. If a user types a negative number in, alert an error.

// let sheepNumber = parseInt(prompt("Enter the number of sheep u want to display"));
// let sheepString = "";

// if(sheepNumber < 0) {
//     console.log("Error");
// }else {
//     for(let i = 1; i <= sheepNumber; i++) {
//         sheepString += ( i + " sheep...");
//     }
//     console.log(sheepString);
// }



// Request a number from a user. Display all the numbers from 1 to 100 which are divisible by a given number.
// let number = parseInt(prompt("enter a number"));

// for(let i = 1; i < 100; i++) {
//     if(i % number == 0) {
//         console.log("Number",i);
//     }
// }

// Put out every 4th element of a given range. A user states the min and max value in the range.

let min = parseInt(prompt("min number: "));
let max = parseInt(prompt("max number: "));

for(let i = min; i < max; i++) {
    if(((min - i) % 4 == 0) && (i !=min)) {
        console.log("number: ", i -1);
    }
}

// Request a number and check whether it is prime. A prime number is divisible without a remainder by itself and 1.

// let isPrimeNumber = true;
// let primeNumber = parseInt(prompt("Enter a number to check if it is a prime number: "));

// for(let i = 2; i < primeNumber; i++) {
//     if((primeNumber % i == 0) && (primeNumber % primeNumber == 0))
//         isPrimeNumber = false;
// }
// console.log(isPrimeNumber ? "Is prime number" : "Is not a prime number sorry");
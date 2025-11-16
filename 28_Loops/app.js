// =============================================== 1st Problem ===============================================
// 1.Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.

// let number = parseInt(prompt("Enter number: "));
// let numberSum = 0;

// for(let i = 1; i <= number; i++) {
//     numberSum +=i;
// }
// console.log("Summation", numberSum);

// =============================================== 2nd Problem ===============================================
// Request two numbers and find only their largest common divisor.

// let x = parseInt(prompt("Enter the first a number: "));
// let y = parseInt(prompt("Enter the second a number: "));
// let commonDivisor = 1;
// let largestNumber = x > y ? x : y;

// for(let i = 2; i < largestNumber; i++){
//     if(x % i == 0 && y % i == 0) {
//         commonDivisor = i;
//     }
// }
// console.log(`Greatest common divisor of ${x} and ${y} is : ${commonDivisor}`);

// =============================================== 3rd Problem ===============================================
// Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.

// let number = parseInt(prompt("Enter a number: "));
// let divisorsStr = "";

// for(let i = 2; i <= number; i++) {
//     if(number % i == 0) {
//         if(i != number){
//             divisorsStr += (i + ", ");
//         }else {
//             divisorsStr += ("and " + i + ".");
//         }
//     }
// }

// =============================================== 4th Problem ===============================================
// Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.

// let number = parseInt(prompt("Enter a number and I will determen the length of this number: "));

// if(number < 0) {
//     number = (-1) * number;
// }

// if(number = 0) {
//     console.log("Digits of the number: 1");
// }else {
//     let length = 1;
//     let i = 10;

//     while(i <= number) {
//         i *= 10;
//         length++;
//     }

//     console.log(`Digits of the number: ${length}`);
// }

// =============================================== 5th Problem ===============================================
// Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. 
// There's only one variable (not 10) needed for input by a user. 

// let positiveNumberCount = 0;
// let negativeNumberCount = 0;
// let zeroNumberCount = 0;
// let oddNumberCount = 0;
// let evenNumberCount = 0;

// for(let i = 0; i < 10; i++){
//     let number = parseInt(prompt("Enter the first number: "));
//     if(number > 0) {
//         positiveNumberCount++;
//         (number % 2 == 0) ? evenNumberCount++: oddNumberCount++;
//     }else if(number < 0){
//         negativeNumberCount++;
//         (number % 2 == 0) ? evenNumberCount++: oddNumberCount++;
//     }else{
//         zeroNumberCount++;
//         evenNumberCount++
//     }
// }

// console.log("Statistics of the numbers:");
// console.log(`Positive number count: ${positiveNumberCount}`);
// console.log(`Negative number count: ${negativeNumberCount}`);
// console.log(`Zero number count: ${zeroNumberCount}`);
// console.log(`Odd number count: ${oddNumberCount}`);
// console.log(`Even number count: ${evenNumberCount}`);

// =============================================== 6th Problem ===============================================
// Loop a calculator. Request 2 numbers and a sign, solve the problem, display the result and ask if the user wants one more. The loop continues until the user refuses. 

// let repeatLoop = true;

// do {
//     let num1 = parseInt(prompt("Enter the first number: "));
//     let num2 = parseInt(prompt("Enter the second number: "));
//     let sign = prompt("Enter the operator[ + - * / ]: ");

//     let result;
//     if(sign == "+") {
//         result = num1 + num2;
//     }else if (sign == "-") {
//         result = num1 - num2;
//     }
//     else if (sign == "*") {
//         result = num1 * num2;
//     }
//     else if (sign == "/") {
//         if(num2 = 0) {
//             console.error("Number2 cant be negative!");
//         }else {
//             result = num1 / num2;
//         }
//     }else {
//         console.log("Invalid operator!");
//     }

//     alert(`The result of ${num1} ${sign} ${num2} = ${result}`);

//     let again = prompt("Do one more [y-yes][n-no]?");
//     if(again == "n") {
//         repeatLoop = false;
//     }

// }while(repeatLoop);

// =============================================== 7th Problem ===============================================
// Request a number from a user and ask by how many digits to move it. 
// Move the digits and display the result (if the number 123456 needs to be moved by 2 digits, the result will be 345612).

// let number = parseInt(prompt("Enter a number: "));
// let shift = parseInt(prompt("Enter the digits u want to shift the number: "));

// // Kalkulo gjatesine e numrit.
// if(number < 0) {
//     number = (-1) * number;
// }

// if(number < 10) {
//     console.log("The number after shifting is: ", number);
// }else {
//     let length = 1;
//     let i = 10;

//     while(i <= number) {
//         i *= 10;
//         length++;
//     }

//     let trueShift = (shift % number); // if the length of the number is 5 (12345) then a shift by 6 is (23451) same as a shift of 1.

//     let x = (number % (10 ** (length - trueShift))) * (10 ** trueShift);
//     let y = ((number - (number % (10 ** (length - trueShift)))) / (10 ** (length - trueShift)));

//     console.log(`x: ${x}`);
//     console.log(`y: ${y}`);

//     console.log(`The number ${number} shifted by ${shift}: ${x + y}`);
// }



// =============================================== 8th Problem ===============================================
// Loop day input like this: «Day of the week. Would you like to see the next one?» which continues as long as the user clicks OK.

//     let dita = +prompt("Dita: [dd]");
//     let muaji = +prompt("Muji [mm]:");
//     let viti = +prompt("Viti [yyyy]");
//     let displayNextDay = true;

// do{
//     let leap = (!(viti % 4) && (viti % 100) || !(viti % 400)) && 1 || 0;

//     let days = 
//         ((muaji == 1 || muaji == 3 || muaji == 5 || muaji == 7 || muaji == 8 || muaji == 10 || muaji == 12) && 31) ||
//         ((muaji == 4 || muaji == 6 || muaji == 9 || muaji == 11) && 30) ||
//         (muaji == 2 && (28 + leap));

//     dita = dita + 1;
//     (dita > days) && (dita = 1, muaji = muaji + 1);
//     (muaji > 12) && (muaji = 1, viti = viti + 1);

//     alert(`${dita}" : "${muaji}" : "${(viti % 100)}`);
//     let nextDay = prompt("Would you like to see the next day: YES[y] NO[n]: ");
//     if(nextDay == "n"){
//         displayNextDay = false;
//     }
// }while(displayNextDay);


// =============================================== 9th Problem ===============================================
// Display the multiplication table of all numbers from 2 to 9. Every number has to be multiplied by 1 to 10. 

// for(let i = 2; i < 10; i++) {
//     console.log(`Multiplication table for ${i}`);
//     for(let j = 2; j < 10; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }
// }

// =============================================== 10th Problem ===============================================
// "Guess the number" game. 

// Suggest a user to think of a number from 0 to 100 and guess it in the following way: 
//      every loop iteration needs to divide the range of numbers in half, 
//      you represent the result as N and ask the user "Your number > N, < N or == N?" 

// Depending on what the user said, narrow down the range. 

// So the starting range is 0 to 100, divided in half is 50. If the user said the number is > 50, the next range is 51 to 100, and so on, until the user chooses == N. 

// let correctAnswer = false;
// let secretNumber = 23;
// do{
//     let number = parseInt(prompt("Gues the number from [0-100]: "));
    
//     if(number < secretNumber) {
//         console.log(`Your number: ${number} < N`);
//     }
//     else if(number > secretNumber) {
//     console.log(`Your number: ${number} > N`);
//     }
//     else{
//         console.log(`Correct!! ${secretNumber} = N`);
//         correctAnswer = true;
//     }
// }while(!correctAnswer);

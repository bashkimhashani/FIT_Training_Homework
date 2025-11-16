//================================================== PROBLEM ===================================================================================
// Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
// let number1 = parseInt(prompt("Enter the first number"));
// let number2 = parseInt(prompt("Enter the second number"));
// let result = compare(number1, number2);

// console.log(result);

// function compare(n1, n2) {
//     if(n1 < n2) {
//         return -1;
//     }else if(n1 > n2) {
//         return 1;
//     }else {
//         return 0;
//     }
// }

//================================================== PROBLEM ===================================================================================
// Write a function that counts the factorial of a given number. 

// let x = parseInt(prompt("Enter the number you would like to know the factoriek of: "));
// factoriel(x);

// function factoriel(x) {
//     let factorialNumber = 1;

//     if(x < 0) {
//         x *= (-1);
//     }

//     if(x != 0) {
//         for(let i = 1; i <= x; i++) {
//             factorialNumber *= i;
//         }
//     }

//     console.log(`The factorial of the number ${x} is: ${factorialNumber}`);
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

// let n1 = parseInt(prompt("Enter a number: "));
// let n2 = parseInt(prompt("Enter a number: "));
// let n3 = parseInt(prompt("Enter a number: "));
// console.log(numberFunction(n1, n2, n3));

// function numberFunction(x, y, z) {
//     return ((x * 100) + (y * 10) + z);
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square. 

// let width = parseInt(prompt("Enter the width of the rectangle: "));
// let height = parseInt(prompt("Enter the height of the rectangle: "));
// console.log(`The area o the rectangle of sides ${width} x ${height} is ${area(width,height)}`);

// function area(width, height) {
//     if((width != 0) && (height != 0)) {
//         return width * height;
//     }
//     else {
//         if(width != 0) {
//             return width * width;
//         }else {
//             return height * height;
//         }
//     }
// }

//================================================== PROBLEM ===================================================================================
// Write a function that checks if the given number is perfect. 
// A perfect number is a number equal to the sum of all its divisors. 
// For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

// let number = parseInt(prompt("Enter a number: "));
// perfectNumber(number);

// function perfectNumber(x) {
//     let sum = 0;

//     for(let i = 1; i < x; i++) {
//         if(x % i == 0) {
//             sum += i;
//         }
//     }

//     console.log((sum == x) ? `The number: ${x} is a perfect number!` :`The number: ${x} is not a perfect number!`);
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. 
// Use the previous function to check, if numbers are perfect. 

// let min = parseInt(prompt("Enter the min of the range: "));
// let max = parseInt(prompt("Enter the max of the range: "));
// rangePerfectNumber(min, max);

// function rangePerfectNumber(min, max) {
//     for(let i = min; i < max; i++){
//         if(perfectNumber(i)) {
//             console.log(`The number ${i} is a perfect number!`);
//         }else {
//             console.log(`The number ${i} is not a perfect number!`);
//         }
//     }
// }

// function perfectNumber(x) {
//     let sum = 0;

//     for(let i = 1; i < x; i++) {
//         if(x % i == 0) {
//             sum += i;
//         }
//     }

//     return ((sum == x) ? true : false);
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. 
// If the seconds are not given, they should be displayed as 00.
// let h = prompt("Enter the hours!");
// let m = prompt("Enter the minutes!");
// let s =  "" + prompt("Enter the seconds!");

// console.log(time(h,m,s));

// function time(h, m, s) {
//     if(!(s === "")) {
//         return ((h < 10 ? ("0" + h) : h) + ":" + (m < 10 ? ("0" + m) : m) + ":" + (s < 10 ? ("0" + s) : s));
//     }else {
//         return ((h < 10 ? ("0" + h) : h) + ":" + (m < 10 ? ("0" + m) : m) + ":00");
//     }
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

// function totalTimeInSeconds(h, m, s) {
//     return ((h * 3600) + (m * 60) + s);
// }

//================================================== PROBLEM ===================================================================================
// Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

// function time(seconds) {
//     let h = ((seconds - (seconds % 3600)) / 3600);
//     let m = (((seconds % 3600) - (seconds % 60)) / 60);
//     let s = seconds % 60;

//     return ((h < 10 ? ("0" + h) : h) + ":" + (m < 10 ? ("0" + m) : m) + ":" + (s < 10 ? ("0" + s) : s));
// }

//================================================== PROBLEM ===================================================================================
// Write a function that counts the difference between the dates. 
// The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. 

// While solving this problem use the functions from the two previous ones: at first,
//  make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.


// function timeDifference(h1, h2, m1, m2, s1, s2) {
//     let totalSeconds1 = totalTimeInSeconds(h1,m1,s1);
//     let totalSeconds2 = totalTimeInSeconds(h2,m2,s2);

//     let deltaTotalTime = (totalSeconds1 < totalSeconds2 ? totalSeconds2 - totalSeconds1 : totalSeconds1 - totalSeconds2);

//     return time(deltaTotalTime);
// }

// function totalTimeInSeconds(h, m, s) {
//     return ((h * 3600) + (m * 60) + s);
// }

// function time(seconds) {
//     let h = ((seconds - (seconds % 3600)) / 3600);
//     let m = (((seconds % 3600) - (seconds % 60)) / 60);
//     let s = seconds % 60;

//     return ((h < 10 ? ("0" + h) : h) + ":" + (m < 10 ? ("0" + m) : m) + ":" + (s < 10 ? ("0" + s) : s));
// }
'use strict';

// Write a function that accepts 2 numbers and returns the smaller one.

// function findSmallerNumber(a,b) {
//     return a < b ? a : b;
// }

// Write a function that raises a number to a given power. 

// function pow(num, pow) {
//     let result = 1;
//     for(let i = 0; i < pow; i++) {
//         result*=num
//     }
//     return result;
// }

// Write a function that accepts 2 numbers and a sign (+ - * /), counts and returns the result.



// Write a function that checks if a given number is prime.

// function isPrime(number) {
//     let isPrimeNumber = true;
//     for(let i = 2; i <= number; i++) {
//         if(number % i == 0) {
//             isPrimeNumber = false;
//         }
//     }

//     console.log(isPrimeNumber ? "Is Prime Number!" : "Is not a prime nomber!");
// }


// Write a function that accepts a number and displays a multiplication table for it. Call the function for all the numbers from 2 to 9.

// function multiplicationTable(num) {

//     for(let i = 2; i <= 9; i++) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }

// Write a function that will execute the % operator task. 
// The function accepts 2 parameters and returns the remainder on division of the first parameter by the second one. Use only + - * / in the function, 
// not the % operator itself. For example, remainder(12, 5) returns 2, remainder(5.5, 2) returns 1.5, remainder(4, 2) returns 0.


// function moduluOperator(number, devider) {
//     if(number == devider) {
//         return 0;
//     }
//     for(let i = 1; i < number; i++) {
//         if(number < (devider * i)) {
//             return number - (devider * (i-1));
//         }
//     }
// }

// let result =  moduluOperator(parseFloat(prompt("Enter first Number:")),parseFloat(prompt("Enter first Number:")));
// console.log(result);


// Write a function that accepts from one to five numbers and returns their sum.


// function sum(n1, n2, n3, n4, n5) {
//     return n1+n2+n3+n4+n5;
// }

// let sumTotal = sum(parseFloat(prompt("Enter the 1st num:")),parseFloat(prompt("Enter the 2nd num:")),parseFloat(prompt("Enter the 3rd num:")),parseFloat(prompt("Enter the 4th num:")),parseFloat(prompt("Enter the 5th num:")),)
// console.log(sumTotal);



// Write a function that accepts from one to five numbers and returns the biggest one.

// function largestNumber(n1, n2, n3, n4, n5) {
//     let largesrNum;
//     if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) {
//         largesrNum = n1;
//     }
//     else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) {
//         largesrNum = n2;
//     }
//     else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) {
//         largesrNum = n3;
//     }
//     else if(n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) {
//         largesrNum = n4;
//     }
//     else if(n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) {
//         largesrNum = n5;
//     }
//     return largesrNum;
// }

// let sumTotal = largestNumber(parseFloat(prompt("Enter the 1st num:")),parseFloat(prompt("Enter the 2nd num:")),parseFloat(prompt("Enter the 3rd num:")),parseFloat(prompt("Enter the 4th num:")),parseFloat(prompt("Enter the 5th num:")),)
// console.log(sumTotal);


// Write a function that displays all even or odd numbers in a given range. The third parameter of the boolean type defines which numbers to put out (true - even, false - odd). 


// function evenOrOdd(min, max, type) {
//     for(let i = min; i < max; i++) {

//         if(type){

//             if(i % 2 == 0) {
//                 console.log(i);
//             }

//         }else {

//             if(i % 2 != 0){
//                 console.log(i);
//             }

//         }
//     }
// }

// evenOrOdd(parseInt(prompt("enter a num:")), parseInt(prompt("enter a num:")),prompt("[even-true][odd-false]"));



// Write a function that accepts a date (day, month, year) and returns the next day in a string "dd:mm:yy". The leap year check should be a separate function. 

// let day = parseInt(prompt("Ente the day of the month:"));
// let month = parseInt(prompt("Ente the month of the year:"));
// let year = parseInt(prompt("Ente the year:"));
// let monthDays;

// let isValidMonth;
// let isValidDay;
// let isLeapYear;

// isLeapYear = (year % 4 == 0)? true : false; 
// isValidMonth = (month > 0 && month < 13) ? true : false;

// if ((muaji == 1 || muaji == 3 || muaji == 5 || muaji == 7 || muaji == 8 || muaji == 10 || muaji == 12)) {

// }

// let days = 
//             ((muaji == 1 || muaji == 3 || muaji == 5 || muaji == 7 || muaji == 8 || muaji == 10 || muaji == 12) && 31) ||
//             ((muaji == 4 || muaji == 6 || muaji == 9 || muaji == 11) && 30) ||
//             (muaji == 2 && (28 + leap));



// ########################################################################################################
// ############################################ OBJECTS ###################################################
// ########################################################################################################



// Create an object that describes a rectangle (contains the coordinates of the upper left and lower right points) 
// and create the following functions for working with this object: 

let rectangle = {
    upperLeft: {
        x: 10,
        y: 9
    },
    lowerRight: {
        x: 2,
        y: 3
    }

}

// A function accepts a rectangle object and types out the info about it (where the points are located).

function printRectangle(obj) {
    for(let key in obj) {
        
    }
}

// A function accepts a rectangle object and returns its width.

function width(obj) {
    return (obj.upperLeft.x - obj.lowerRight.x);
}

// A function accepts a rectangle object and returns its height.

function height(obj) {
    return (obj.upperLeft.y - obj.lowerRight.y);
}


// A function accepts a rectangle object and returns its content. 

function printContent(obj) {
    for(let key in obj){
        if(typeof key == "object") {
            printContent(key);
        }else {
            console.log(`${key} = ${obj[key]}`);
        }
    }
}


// A function accepts a rectangle object and returns its perimeter. 

function perimeter(obj) {
    return 2*(height + width);
}


// A function for changing the width of the rectangle. It takes an object and by how many units to change the width.

function modifyTheWidth(obj, units) {
    obj.lowerRight.x += units;
}


// A function for changing the height of the rectangle. It takes an object and by how many units to change the height.

function modifyTheHeight(obj, units) {
    obj.upperLeft.y += units;
}

// A function for changing the width and the height of the rectangle. It takes an object and by how many units to change the width and the height.

function modifyTheWidthAndHeight(obj, units) {
    modifyTheWidth(obj, units);
    modifyTheHeight(obj, units);
}

// A function for conveying the X-shift of the rectangle. It takes an object and by how many units to move it. 

function xShift(obj, units) {
    obj.lowerRight.x += units;
    obj.upperLeft.x += units;
}

// A function for conveying the Y-shift of the rectangle. It takes an object and by how many units to move it. 

function yShift(obj, units) {
    obj.lowerRight.y += units;
    obj.upperLeft.y += units;
}

// A function for conveying the shift on both axis. It takes an object and by how many units to move it for both X and Y axis. 

function shiftWholeRectangle(obj, units) {
    xShift(obj, units);
    yShift(obj, units);
}

// A function for checking if the point is within the rectangle. It accepts a rectangle object and the point coordinates.

let point = {
    x: 10,
    y: 10
}

function point(obj, point) {
    return ((point.x > obj.upperLeft.x && point.x < obj.lowerRight.x) && (point.y < obj.upperLeft.y && point.y > obj.lowerRight.y)) ? true : false;  
}
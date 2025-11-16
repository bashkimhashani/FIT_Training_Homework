//1. Request a three-digit number from a user and check whether it has identical digits in it.

let num1 = parseInt(prompt("Enter a three-digit number:"));
let firstDigit = ((num1 - (num1 % 100)) / 100) * 1;
let secondDigit = (((num1 % 100) - (num1 % 10)) / 10) * 1;
let thirdDigit ; (num1 % 10) * 1;

let hasIdenticalDigits = ((firstDigit == secondDigit) || (firstDigit == thirdDigit) || (secondDigit == thirdDigit));
console.log(hasIdenticalDigits);

//2. Request a five-unit number from a user and check whether it is a palindrome.

let number = parseInt(prompt("Enter a five digit number: "));

let n1 = ((number - (number % 10000)) / 10000);
let n2 = (((number % 10000) - (number % 1000)) / 1000);
let n4 = (((number % 100) - (number % 10)) / 10);
let n5 = (number % 10);

let isPalindromeNumber = ((n1 == n5) && (n2 == n5));
console.log(`Is the number: ${number} a palindrome: ${isPalindromeNumber}`);

//3. Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. 

let money = parseInt(prompt("Enter the amount of money[USD]: "));
let convertTo = prompt("Enter the currency u want to convert to[EUR, SEK, AUD]:");

let moneyCnverted = ((convertTo == "EUR" && money * 0.86) || (convertTo == "SEK" && money * 9.45) || (convertTo == "AUD" && money * 1.53));
console.log(moneyCnverted);

//4. Request a length of a circumference and a perimeter of a square from a user. Define whether that circumference can fit in that square.

let circumference = parseFloat(prompt("Enter a circumference of a circle: "));
let perimeter = parseFloat(prompt("Enter a perimeter of a square: "));

let r = (circumference / (2 * 3.14));
let side = (perimeter / 4);

let doesItFit = (r < side);
console.log(`Does the circle fit inside the square: ${doesItFit}`);

//5. Request a date (dd:mm:yy) and put out the one that goes after it. Pay attention to the start of a new month, new year, and also leap years.


let dita = +prompt("Dita: [dd]");
let muaji = +prompt("Muji [mm]:");
let viti = +prompt("Viti [yyyy]");

let leap = (!(viti % 4) && (viti % 100) || !(viti % 400)) && 1 || 0;

let days = 
    ((muaji == 1 || muaji == 3 || muaji == 5 || muaji == 7 || muaji == 8 || muaji == 10 || muaji == 12) && 31) ||
    ((muaji == 4 || muaji == 6 || muaji == 9 || muaji == 11) && 30) ||
    (muaji == 2 && (28 + leap));

dita = dita + 1;
(dita > days) && (dita = 1, muaji = muaji + 1);
(muaji > 12) && (muaji = 1, viti = viti + 1);

alert(dita + ":" + muaji + ":" + (viti % 100));
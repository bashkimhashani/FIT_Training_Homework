// Create an array of 10 random numbers and write a few functions for working with it. 
let numbers = [1,2,3,55,23,89,12,17,10];

// A function takes the array and displays it on the screen. 



// A function takes the array and only puts out even elements. 



// A function takes the array and returns the sum of all array elements.

// function sum(arr) {
//     let total = 0;
//     for(let i = 0; i < arr.length; i++) {
//         total+=arr[i];
//     }
//     return total;
// }

// console.log(`The sum of the elements: ${sum(numbers)}`);

// A function takes the array and returns its max element.

// function arrMax(arr) {
//     let max = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     return max;
// }

// console.log(`The max element: ${arrMax(numbers)}`);


// A function for adding a new element to the array via given index.

// function addNewElement(arr, index, element) {
//     for(let i = 0; i < arr.length; i++) {
//         if(index != i) {
//             arr[index]= element;
//         }
//     }

//     return arr;
// }

// console.log(`The max element: ${addNewElement(numbers, 3, 67)}`);

// A function for removing an element from the array via given index.

// function removeElement(arr, index){
//     let newArray = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(i != index) {
//             newArray.push(arr[i]);
//         }
//     }

//     return newArray;
// }

// console.log(`The max element: ${removeElement(numbers, 3)}`);


//================================================================Part 2=================================

// Create another array of 5 random numbers and write the following functions:

let arr1 = [1,5,10,17,23];

let arr2 = [4,17,5,20,10];

// A function takes 2 arrays and returns a new array with all the elements of those two without repetition.

// function combine(arr1, arr2) {
//     let newArray = [];

//     for(let i = 0; i < arr1.length; i++) {
//         newArray.push(arr1[i]);
//     }

//     for(let i = 0; i <arr2.length; i++) {
//         let repeats = false;

//         for(let j = 0; j < arr1.length; j++) {
//             if(arr1[j] == arr2[i]) {
//                 repeats = true;
//             }
//         }

//         if(!repeats) {
//             newArray.push(arr2[i]);
//         }

//     }

//     return newArray;
// }

// console.log(`Combined arrays: ${combine(arr1,arr2)}`);

// A function takes 2 arrays and returns a new array of those elements found in both previous arrays without repetition. 

// function combineSame(arr1, arr2) {
//     let temp = [];

//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++) {
//             if((arr1[i] == arr2[j]) && contains(arr1, arr2[j])) {
//                 temp.push(arr1[i]);
//             }
//         }
//     }
//     return temp;
// }

// function contains(arr, element){
//     let containsElement = false;

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == element) {
//             containsElement = true;
//         }    
//     }

//     return containsElement;
// }

// console.log(`Combined common arrays: ${combineSame(arr1,arr2)}`);

// A function takes 2 arrays and returns a new array of all the elements from the first array that cannot be found in the second one. 

function combineSameInvers(arr1, arr2) {
    let temp = [];

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++) {
            if(!contains(arr2, arr1[i])) {
                temp.push(arr1[i]);
            }
        }
    }
    return temp;
}

function contains(arr, element){
    let containsElement = false;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == element) {
            containsElement = true;
        }    
    }

    return containsElement;
}

console.log(`Combined common arrays: ${combineSameInvers(arr1,arr2)}`);

// Create an array of fruit and sort it by alphabet. Write the following functions:

// let fruits = ["Apple", "Pear", "Strawberry", "Grape", "Mango"];

// let temp = fruits.sort( (a,b) => { return b - a});

// Display it on the screen using document.write() as a list (using ul and li tags). 

// function display(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// Finding a fruit in an array. 
// A functions takes the name of a fruit and return the index of the found element or -1 if it is not found. 
// The search shouldn't be letter case sensitive.

// function find(arr, element) {
//     let index = -1;
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == element) {
//             index = i;
//         }
//     }
//     return index;
// }
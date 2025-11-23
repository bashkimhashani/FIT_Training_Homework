// Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. 
// Write a few functions for working with this array. 

const groceriesList = [
    { name: "Milk", amount: 2 , bought: false},
    { name: "Eggs", amount: 12 , bought: true},
    { name: "Bread", amount: 1 , bought: false},
    { name: "Apples", amount: 6 , bought: true},
    { name: "Chicken", amount: 1 , bought: false},
    { name: "Rice", amount: 2 , bought: true},
    { name: "Tomatoes", amount: 1 , bought: false},
];

//1.     Display the entire list, so that the not yet purchased items go before the bought ones. 

// const temp =  groceriesList.sort( (a,b) => {
//     const boughtA = a.bought;
//     const boughtB = b.bought; 

//     if (boughtA < boughtB) {
//       return -1;
//     }
//     if (boughtA > boughtB) {
//       return 1;
//     }

//     return 0;
// })

// console.log("Display the entire list, so that the not yet purchased items go before the bought ones.");
// console.log(temp);


// 2. Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 

// I went big brain on this one hehehehe

// let nameOfProduct = prompt("Enter the name of the product: ");
// let amountOfProdyct = parseInt(prompt("Enter the amount of the produce: "));

// addToTheList(groceriesList, nameOfProduct, amountOfProdyct);

// console.log(groceriesList);

// function addToTheList(list , name, amountNum) {
//   let tempIndex = contains(list, name);
//   console.log(`Index: ${tempIndex}`);

//   if(tempIndex != -1){
//     list[tempIndex].amount += amountNum;

//     if(list[tempIndex].bought){
//       list[tempIndex].bought = false;
//     }
//   }
//   else{
//     list.push({
//       name: name,
//       amount: amountNum,
//       bought: false
//     });
//   }
// }

// function contains(list, name) {
//   for(let i = 0; i < list.length; i++) {
//     if(list[i].name == name){
//       return i;
//     }
//   }
//   return -1;
// }

// 3. Purchasing a product. The function accepts the name of a product and marks it as bought.

// let itemName = prompt("Enter the name of the product u want to purchase: ");
// purchaseItem(groceriesList, itemName);
// console.log(groceriesList);

// function purchaseItem(groceriesList, itemName) {
//   let indexOfItem = contains(groceriesList, itemName);

//   if(indexOfItem != -1) {
//     groceriesList[indexOfItem].bought = true;
//   }else {
//     console.log(`Item [${itemName}] is not in your groceries list!`);
//   }
// }

// function contains(list, name) {
//   for(let i = 0; i < list.length; i++) {
//     if(list[i].name == name){
//       return i;
//     }
//   }
//   return -1;
// }
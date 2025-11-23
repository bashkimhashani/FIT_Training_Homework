// 2. Create an array that describes a shop receipt. 
// Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

const purchases = [
    { name: "Milk",      amount: 2,  price: 1.50 },
    { name: "Eggs",      amount: 12, price: 0.25 },
    { name: "Bread",     amount: 1,  price: 2.00 },
    { name: "Apples",    amount: 6,  price: 0.40 },
    { name: "Chicken",   amount: 1,  price: 5.99 },
    { name: "Rice",      amount: 2,  price: 1.20 },
    { name: "Tomatoes",  amount: 4,  price: 0.50 }
];


//  1.   Print the receipt out on the screen.

//I kam thirr funksionet e kerkeses 2, 3 edhe 4 te ky funksioni per me u shfaq ma mire ne screen outputi :)

document.write(listOfShoping(purchases));

function listOfShoping(list) {
    let stringList = "<table> <tr> <td>Name</td> <td>Amount</td> <td>Price</td> </tr>";

    for(let i = 0; i < list.length; i++) {
        stringList += `<tr> <td>${list[i].name}</></td> <td> ${list[i].amount}</td> <td>${list[i].price}</td> </tr>`;
    }

    stringList += totalPurchase(list);
    stringList += mostExpensiveItem(list);
    stringList += avgPrice(list);

    stringList += "</table>";

    return stringList;
}

//  2.   Counting the sum of the purchase.

function totalPurchase(list) {
    let total = 0;

    for(let i = 0; i < list.length; i++) {
        total += list[i].amount * list[i].price;
    }

    let tempString = `<tr> <td colspan=2><h3>Total</h3></td> <td><h3>${total}$</h3></td> </tr>`;

    return tempString;
}

//  3.   Extracting the most expensive item on the receipt.

function mostExpensiveItem(list) {
    let max = list[0].price;

    for(let i = 0; i < list.length; i++) {
        if(max < list[i].price) {
            max = list[i].price;
        }
    }

    let tempString = `<tr> <td colspan=2><h4>MostExpensive</h4></td> <td><h4>${max}$</h4></td> </tr>`;

    return tempString;
}

//  4.   Counting an average item price on the receipt.

function avgPrice(list) {
    let total = 0;
    for(let i = 0; i < list.length; i++){
        total += list[i].price;
    }

    let avgTemp = total / list.length;
    let tempString = `<tr> <td colspan=2> <h4>Average price</h4> </td> <td> <h4>${avgTemp.toFixed(2)}$</h4> </td> </tr>`;

    return tempString;
}
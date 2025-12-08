// 1) Implement a class that describes a circle. It must have the following components:

//     DONE a field that stores the radius of the circle;
//     DONE get-property that returns the radius of the circle;
//     DONE set-property that sets the radius of the circle;
//     DONE get-property that returns the diameter of the circle;
//     DONE a method that calculates the area of a circle;
//     DONE a method that calculates the length of the circle.

// Demonstrate the work of properties and methods.

 
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    get getRadius() {
        return this.radius;
    }

    set setRadius(radius) {
        this.radius = radius;
    }

    get getDiameter() {
        return this.radius * 2;
    }

    area() {
        return Math.PI * this.radius**2;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

let rrethi1 = new Circle(10);

console.log(`The radius of the circle is: ${rrethi1.getRadius}`);
console.log(`Lets modify the radius of the circle: ${rrethi1.setRadius = 5}`);
console.log(`The diameter of the circle with radius: ${rrethi1.getRadius} is: ${rrethi1.getDiameter}`);
console.log(`The are of the circle is with radius: ${rrethi1.getRadius} is: ${rrethi1.area()}`);
console.log(`The perimeter of the circle is with radius: ${rrethi1.getRadius} is: ${rrethi1.perimeter()}`);

// 2) Implement a class that describes a stationery marker. It must have the following components:

//     DONE A field that stores the color of the marker;
//     DONE A field that stores the amount of ink in the marker (in percent);
//     DONE An input method (accepts a string and prints the text in the corresponding color;...
//     ...the text is displayed as long as there is ink in the marker; one non-whitespace character is 0.5% of the ink in the marker).

// Implement a class that describes a refillable marker. Inherit this class from a simple marker and add a method for refilling.

// Demonstrate the work of the written methods.

class Marker {
    constructor(color, ink) {
        this.color = color;
        this.colorAmount = ink;
    }

    getInk() {
        return this.colorAmount;
    }

    writeText(text) {
        let tempString = "";
        let textLength = text.split(" ").join("").length;

        if(this.colorAmount == 0) {
            console.log("Out of ink");
        }else if(textLength <= this.colorAmount * 2) {
            this.writeToScreen(text);

            // So everytime the marker is used the ink % goes down!
            this.colorAmount -= textLength * 0.5;      
        }else {
            tempString = this.whiteSpaces(text);
            this.writeToScreen(tempString);

            // So everytime the marker is used the ink % goes down!
            let tempStringLength = tempString.split(" ").join("").length;
            this.colorAmount -= tempStringLength * 0.5; 
        }
    }

    whiteSpaces(text) {
        let temp = "";
        let whiteSpacesCount = 0;

        for(let i = 0; i < text.length; i++) {
            if(text.charAt(i) === ' ') {
                whiteSpacesCount++;
            }
        }

        for(let i = 0; i < text.length && i < this.colorAmount * 2 + whiteSpacesCount; i++) {
            temp += text.charAt(i);
        }

        return temp;
    }

    writeToScreen(text) {
        let textHtml = document.createElement('p');
        textHtml.innerText = text;
        textHtml.style.color = "red";
        document.body.appendChild(textHtml);
    }

}

class SimpleMarker extends Marker {
    constructor(color, ink) {
        super(color, ink);
    }

    refill() {
        if(this.colorAmount == 100) {
            console.log(`The marker is already full [100%]`);   
        }else {
            this.colorAmount = 100;
            console.log(`The marker is now full thanks for the refill :)`);           
        }
    }
}

// displays only the first 6 letters [6*0.5=3%] example: Hello_w
let RedMarker = new Marker("Red", 30);

RedMarker.writeText("Hello world!");
console.log(`Hello world! ${RedMarker.getInk()}`);

RedMarker.writeText("Hello");
console.log(`Hello ${RedMarker.getInk()}`);

RedMarker.writeText("KIMI");
console.log(`KIMI ${RedMarker.getInk()}`);




// didnt know this one SORRY :( 
// 3) Implement the Employee class that describes the employee and create an array of bank employees.

// Implement the EmpTable class to generate HTML code for a table with a list of bank employees. 
// The array of employees must be passed through the constructor and get the HTML code using the getHtml () method.
// Create an object of class EmpTable and display the result of the getHtml () method.
// Set up sass compilation via webpack.
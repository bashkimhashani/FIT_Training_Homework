// 1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

//     A method that displays the car info 
//     A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

let car = {
    manufacturer: "BMW",
    model: "x5",
    year: 2006,
    speed: 235,

    info() {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key}: ${this[key]}`);
            }
        }
    },

    distance(distance) {
        let totalTime = 0;
        let breakTimes = 0;

        totalTime = parseInt(distance / this.speed);
        breakTimes = parseInt(totalTime / 4);
        return totalTime += breakTimes;
    }
}


// 2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

//     A function for adding two fraction objects.
//     A function for subtracting two fraction objects.
//     A function for multiplying two fraction objects.
//     A function for dividing two fraction objects.
//     A function for simplifying a fraction object. 

let fraction = {
    numerator: 4,
    denominator: 5,

    add(fr1, fr2) {
        let num = fr1.numerator * fr2.denominator + fr2.numerator * fr1.denominator;
        let den = fr1.denominator * fr2.denominator;
        return this.simplify({ numerator: num, denominator: den });
    },

    subtract(fr1, fr2) {
        let num = fr1.numerator * fr2.denominator - fr2.numerator * fr1.denominator;
        let den = fr1.denominator * fr2.denominator;
        return this.simplify({ numerator: num, denominator: den });
    },

    multiply(fr1, fr2) {
        let num = fr1.numerator * fr2.numerator;
        let den = fr1.denominator * fr2.denominator;
        return this.simplify({ numerator: num, denominator: den });
    },

    divide(fr1, fr2) {
        let num = fr1.numerator * fr2.denominator;
        let den = fr1.denominator * fr2.numerator;
        return this.simplify({ numerator: num, denominator: den });
    },

    simplify(fr) {
        let a = fr.numerator;
        let b = fr.denominator;

        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        fr.numerator /= a;
        fr.denominator /= a;

        return fr;
    }
};



// 3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

//     A method for displaying the time. 
//     A method for changing the time by a given amount of seconds. 
//     A method for changing the time by a given amount of minutes.  
//     A method for changing the time by a given amount of hours. 

// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

let time = {
    hours : 0,
    minutes: 0,
    seconds: 0,

    dispaly() {
        let h = (this.hours < 10 ? ("0" + this.hours) : ("" + this.hours));
        let m = (this.minutes < 10 ? ("0" + this.minutes) : ("" + this.minutes));
        let s = (this.seconds < 10 ? ("0" + this.seconds) : ("" + this.seconds));

        console.log(`«${h}:${m}:${s}»`);
    },

    addSeconds(s) {
        this.seconds +=s;
    },
    
    addMinutes(m) {
        this.minutes +=m;
    },
    
    addHours(h) {
        this.hours +=h;
    },

    wrapAroundTime() {
        if(this.seconds >= 60) {
            this.minutes += parseInt(this.seconds / 60);
            this.seconds = this.seconds % 60;
        }

        if(this.minutes >= 60) {
            this.hours += parseInt(this.minutes / 60);
            this.minutes = this.minutes % 60;
        }

        if(this.hours >= 24) {
            this.hours = this.hours % 24;
        }
    }
}

// :) 
// In the HTML page, add the ability for the user to create their own dashboard of clocks.
// These are clocks for different parts of the world. 
// It is necessary to add an input field and a button to create a new clock when clicked. 
// WorldClock is implemented via the class. 
// Each instance of this class is a new clock. 
// The class must have the following components:

//         getCurrentDate
//         getCurrentDateTime
//         deleteClock

// button one – shows the user the time in text form
// button two – displays the current date and time in text form
// button three – deletes the clock from the "wall" of clocks

class Clock {
      constructor(year, month, day, hour, minute) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.hour = hour;
        this.minute = minute;
      }

      getCurrentDate() {
        return `${this.year}-${this.month}-${this.day} \n ${this.getCurrentDateTime()}`;
      }

      getCurrentDateTime() {
        return `${this.hour}:${this.minute}`;
      }

      // deleteClock() {
      //   this = null;
      // }
    }


document.getElementById("dateForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const raw = document.getElementById("dt").value; // format: yyyy-mm-ddThh:mm

    if (!raw) return;

    const [datePart, timePart] = raw.split("T");
    const [year, month, day] = datePart.split("-").map(Number);
    const [hour, minute] = timePart.split(":").map(Number);

    // Create Clock object
    const clock = new Clock(year, month, day, hour, minute);

    console.log("Clock object:", clock);
    alert(
      `Stored Clock:\n${clock.year}-${clock.month}-${clock.day} ` +
      `${clock.hour}:${clock.minute}`
    );

    createClockCard(clock);

});

function createClockCard(clock) {
    let clockHtml = `<div class="clock-card">
                        <div class="clock"></div>
                        <ul class="button-list">
                            <button id="time-btn">${clock.hour}:${clock.minute}</button>
                            <button id="date-btn">${clock.year}-${clock.month}-${clock.day}\n${clock.hour}:${clock.minute}</button>
                            <button class="delete-btn">DELETE</button>
                        </ul>
                      </div>`;
    console.log("inside the function ");
    console.log();
    
    
    let clockWall = document.getElementById("worlClocks");
    console.log(clockWall.children);
    
    clockWall.innerHTML += clockHtml;
}

document.getElementById("worlClocks").addEventListener("click", function (e) {
    if (e.target.classList.contains("delete-btn")) {
        // Find the parent .clock-card and remove it
        const card = e.target.closest(".clock-card");
        if (card) card.remove();
    }
});


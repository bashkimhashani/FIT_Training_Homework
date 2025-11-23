//  Create an array of academy classrooms. 
//  A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. 
//  Write a few functions for working with it.
const classrooms = [
  { name: "A411", seats: 15, faculty: "Mathematics" },
  { name: "B408", seats: 18, faculty: "Physics" },
  { name: "A616", seats: 12, faculty: "Chemistry" },
  { name: "A618", seats: 20, faculty: "Computer Science" },
  { name: "C201", seats: 10, faculty: "Biology" },
  { name: "F412", seats: 12, faculty: "Literature" },
  { name: "C415", seats: 20, faculty: "Law" },
  { name: "B620", seats: 10, faculty:  "Art" },
  { name: "D620", seats: 18, faculty: "Education" },
  { name: "D212", seats: 11, faculty: "Astronomy" },
  { name: "B316", seats: 16, faculty: "Architecture" },
  { name: "C401", seats: 11, faculty: "Engineering" },
  { name: "D617", seats: 14, faculty: "Geography" },
  { name: "A612", seats: 16, faculty: "History" },
  { name: "D210", seats: 13, faculty: "Philosophy" },
];

// 1.     Display all the classrooms.

displayClass(classrooms);

function displayClass(classrooms) {
    document.write("<h2>Class Rooms</h2>");
    document.write("<ul><li><strong>Name  </strong> : Capacity : Faculty Name</li>");

    classrooms.forEach(room => {
        document.write(`<li><strong>${room.name}</strong> : ${room.seats} : ${room.faculty}</li>`);
    });
    document.write(`</ul>`);
}

// 2.     Display all the classrooms for a given faculty.

let facultyName = prompt("Enter the name of the faculty you want to see the information for!");
classOfFaculty(classrooms, facultyName);

function classOfFaculty(classrooms, faculty) {
    document.write(`<h2>${faculty} Class Rooms</h2>`);
    document.write("<ul><li><strong>Name</strong> : Capacity</li>");

    classrooms.forEach(room => {
        if(room.faculty == faculty){
            document.write(`<li><strong>${room.name}</strong> : ${room.seats}</li>`);
        }
    });
    document.write(`</ul>`);
}


// 3.    Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.

let groupName = prompt("Enter the name of the group:");
    let groupNumber = prompt("Enter the number of members of the group:");
    let facultyName2 = prompt("Enter the faculty of the group:");

let group = {
    name : groupName,
    number : groupNumber,
    faculty : facultyName2
}

classForGroups(classrooms, group)

function classForGroups(classrooms, group) {
    document.write(`<h2>Class Rooms that can suport the given group</h2>`);
    document.write(`<h2>Name: ${group.name}<br> Number : ${group.number}<br> Faculty: ${group.faculty}</h2>`)
    document.write("<ul><li><strong>Name</strong> : Capacity</li>");

    classrooms.forEach(Classroom => {
        if(Classroom.faculty == group.faculty) {
            if(Classroom.seats > group.number) {
                document.write(`<li><strong>${Classroom.name}</strong> : ${Classroom.seats} : ${Classroom.faculty}</li>`)
            }
        }
    });
    document.write(`</ul>`);
}

// 4.   A function for sorting all the classrooms by number of seats.

displaySortedClasses(classrooms);

function displaySortedClasses(classrooms) {
    let temp = sortBySeats(classrooms);

    document.write(`<h2>Class Rooms BUT SORTED huh cool right</h2>`);
    document.write("<ul><li><strong>Name</strong> : Capacity : Faculty Name</li>");

    classrooms.forEach(Classroom => {
        document.write(`<li><strong>${Classroom.name}</strong> : ${Classroom.seats} : ${Classroom.faculty}</li>`)
    });
    document.write(`</ul>`);

}

function sortBySeats(classrooms) {
    return classrooms.sort((a, b) => b.seats - a.seats);
}

// 5.   A function for sorting all the classrooms by name in alphabetical order.

displaySortedClassesByName(classrooms);

function displaySortedClassesByName(classrooms) {
    let temp = sortBySeats(classrooms);

    document.write(`<h2>Class Rooms BUT SORTED huh cool right</h2>`);
    document.write("<ul><li><strong>Name</strong> : Capacity : Faculty Name</li>");

    classrooms.forEach(Classroom => {
        document.write(`<li><strong>${Classroom.name}</strong> : ${Classroom.seats} : ${Classroom.faculty}</li>`)
    });
    document.write(`</ul>`);

}

function sortBySeats(classrooms) {
    return classrooms.sort((a, b) => a.name.localeCompare(b.name));
}
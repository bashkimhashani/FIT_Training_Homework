// Basic level:

// Implement the User class. 
// When creating an instance based on this class, the object must have the form {name: ‘Petro’, role: ‘admin’} (role can be either admin or user). 
// In case of incorrectly transferred data of such an object, the corresponding field that was entered incorrectly should be warned using an alert. 
// The User class must have the following components: 

//         getName
//         getRole
//         login
//         logout
//         сhangeName
//         changePassword

// The Admin class should have the following components:

//         addUser
//         removeUser
//         changeUserRole
//         getAllUsers
//         removeAllUsers


// class User {
//     static usersList = [];
//     constructor(name, role, password) {
//         if(!(role == "user" || role == "admin")) {
//             alert("Role not suported");
//         }else {
//             this.name = name;
//             this.role = role;
//             this.password = password;
//             usersList.push(this);
//         }
//     }

//     get getName() {
//         return this.name;
//     }

//     get getRole() {
//         return this.role;
//     }

//     logIn(name, password) {
//         if(this.name == name && this.password == password) {
//             console.log("You have Logged in!");
//         }else {
//             console.log("Incorrect name or password!");
//         }
//     }

//     logOut() {
//         console.log(`Sucesfully logged out of ${this.name}`);
//     }

//     changeName(newName, password) {
//         if(this.password == password) {
//             this.name = newName;
//             console.log(`Your name has been changed sucesfully!`);
//         }else {
//             console.log(`Uncorrect password`);
//         }
//     }

//     changeName(newPassword, oldPassword) {
//         if(this.password == oldPassword) {
//             this.password = newPassword;
//             console.log(`Your password has been changed sucesfully!`);
//         }else {
//             console.log(`Uncorrect password`);
//         }
//     }
// }

// // The Admin class should have the following components:

// //         addUser
// //         removeUser
// //         changeUserRole
// //         getAllUsers
// //         removeAllUsers

// class Admin extends User {
//     constructor(name) {
//         const role = "admin";
//         super(name, role);
//     }

//     addUser(name, password) {
//         const role = "user";
//         super(name, role, password);
//     }

//     removeUser(idIndex) {
//         //E bona me bo search me index(is ID, masi indexi osht unik).
//         let tempUserList;

//         for(let i = 0; i < usersList.length; i++) {
//             if(i != idIndex) {
//                 tempUserList.push(this.usersList[i]);
//             }
//         }

//         this.usersList = tempUserList;
//     }

//     changeUserRole(idIndex) {
//         this.usersList[i].role = this.usersList[i].role == "user" ? "admin" : "user";
//     }

//     getAllUsers() {
//         return this.usersList;
//     }

//     removeAllUsers() {
//         this.usersList = [];
//     }
// }


// Intermediate level:

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

// Mockup(a simple model)
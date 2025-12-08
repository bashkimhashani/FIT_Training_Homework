// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static a = 10;

//   introduce() {
//     console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
//   }

//   // Example of a "normal" method all children inherit
//   celebrateBirthday() {
//     this.age += 1;
//     console.log(`${this.name} is now ${this.age}!`);
//   }

//   // static method -> belongs to the class, not instances
//   static isAdultAge(age) {
//     return age >= 18;
//   }
// }

// class Student extends Human {
//   constructor(name, age, university) {
//     super(name, age); // <- calls Human constructor
//     this.university = university;
//   }

//   introduce() {
//     // polymorphism + super
//     super.introduce();
//     console.log(`I'm a student at ${this.university}.`);
//   }
// }


// class Adult extends Human {
//   constructor(name, age) {
//     super(name, age);

//     if (!Human.isAdultAge(age)) {
//       console.warn(`${name} is not technically an adult by age, but okay for the example.`);
//     }
//   }

//   introduce() {
//     super.introduce();
//     console.log(`I'm an adult.`);
//   }
// }

// class Worker extends Adult {
//   constructor(name, age, profession) {
//     super(name, age);
//     this.profession = profession;
//   }

//   introduce() {
//     super.introduce();
//     console.log(`I work as a ${this.profession}.`);
//   }
// }

// // --- In-class usage demo ---
// const human = new Human("Ana", 10);
// const student = new Student("Blerim", 20, "State University");
// const adult = new Adult("Erion", 25);
// const worker = new Worker("Elira", 35, "Frontend Developer");

// human.introduce();
// student.introduce();
// adult.introduce();
// worker.introduce();

// // instanceof checks
// console.log(student instanceof Student); // true
// console.log(student instanceof Human);   // true
// console.log(worker instanceof Worker);   // true
// console.log(worker instanceof Adult);    // true
// console.log(worker instanceof Human);    // true
// console.log(worker instanceof Student);  // false

// // static method – called on the class
// console.log(Human.isAdultAge(17)); // false
// console.log(Human.isAdultAge(18)); // true

// // "Classes are functions":
// console.log(typeof Human);           // "function"
// console.log(Human.prototype);        // methods live here


// // DETYRA 


// // 1. Remove Adult and directly do Worker extends Human.

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   static a = 10;

//   introduce() {
//     console.log(`Hi, I'm ${this.name}, I'm ${this.age} years old.`);
//   }

//   // Example of a "normal" method all children inherit
//   celebrateBirthday() {
//     this.age += 1;
//     console.log(`${this.name} is now ${this.age}!`);
//   }

//   // static method -> belongs to the class, not instances
//   static isAdultAge(age) {
//     return age >= 18;
//   }
// }

// class Student extends Human {
//   constructor(name, age, university) {
//     super(name, age); // <- calls Human constructor
//     this.university = university;
//   }

//   introduce() {
//     // polymorphism + super
//     super.introduce();
//     console.log(`I'm a student at ${this.university}.`);
//   }
// }

// class Worker extends Human {
//     constructor(name, age, company) {
//         super(name, age);
//         this.company = company;
//     }

//     introduce() {
//         super.introduce();
//         console.log(`I work at the company named: ${this.company}`);
//     }
// }

// // 2. Then bring back Adult and refactor to Worker extends Adult.

// class Adult extends Human {
//   constructor(name, age) {
//     super(name, age);

//     if (!Human.isAdultAge(age)) {
//       console.warn(`${name} is not technically an adult by age, but okay for the example.`);
//     }
//   }

//   introduce() {
//     super.introduce();
//     console.log(`I'm an adult.`);
//   }
// }

// class Worker extends Adult {
//   constructor(name, age, profession) {
//     super(name, age);
//     this.profession = profession;
//   }

//   introduce() {
//     super.introduce();
//     console.log(`I work as a ${this.profession}.`);
//   }
// }

// // 3. Create a Teenager class that extends Human and overrides introduce() with their own text. 

// class Teenager extends Human {
//     constructor(name, age, school) {
//         super(name, age);
//         this.school = school;

//         if(isAdultAge()) {
//             console.warn(`${this.name} is not technically an teenager acording to their age.`);
//         }
//     }

//     introduce() {
//         super.introduce();
//         console.log(`I go to school at: ${this.school}`);
//     }
// }



// Example 2: User and Admin demo

class User {
  constructor(name, role) {
    if (typeof name !== "string" || !name.trim()) {
      console.warn("Invalid name, setting default 'Unknown'.");
      this.name = "Unknown";
    } else {
      this.name = name.trim();
    }

    if (role !== "admin" && role !== "user" && typeof role !== "string" && !role.trim()) {
      console.warn(`Invalid role "${role}", setting default "user".`);
      this.role = "user";
    } else {
      this.role = role;
    }

    this.isLoggedIn = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    this.isLoggedIn = true;
    console.log(`${this.name} logged in.`);
  }

  logout() {
    this.isLoggedIn = false;
    console.log(`${this.name} logged out.`);
  }

  changeName(newName) {
    if (typeof newName !== "string" || !newName.trim()) {
      console.warn("Invalid new name.");
      return;
    }
    console.log(`Changing name from ${this.name} to ${newName.trim()}`);
    this.name = newName.trim();
  }

  changePassword() {
    // for demo only
    console.log(`Password for ${this.name} was changed (demo).`);
  }
}

// Admin extends User
class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];

  }

  addUser(user) {
    if (!(user instanceof User) || !(user instanceof Admin)) {
      console.warn("Only instances of User can be added.");
      return false;
    }else {
        this.users.push(user);
    }
  }

  removeUser(userName) {
    if(typeof userName !== "string" || !userName.trim()) {
        console.warn(`The name is not valid!`);
    }else {
        this.users = this.users.filter((user) => user.name !== userName);
    }
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find((user) => user.name === userName);
    if (!user) {
      console.warn("User not found.");
      return;
    }

    if (newRole !== "admin" && newRole !== "user") {
      console.warn("Invalid role.");
      return;
    }

    if((newRole == "admin" && user.getRole() == "user") || ((newRole == "user" && user.getRole() == "admin"))) {
        user.role = newRole;
    }else{
        console.warn(`The new role is the same as the curent role!`);
    }
    
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
  }

  // static helper just to reinforce static
  static isAdmin(user) {
    return user instanceof User && user.role === "admin";
  }
}

// --- In-class usage demo ---
const simpleUser = new User("Petro", "admin");
const normalUser = new User("Mira", "user");
const wrongUser = new User("", "boss"); // will trigger warnings

const admin = new Admin("MainAdmin");

admin.addUser(simpleUser);
admin.addUser(normalUser);
admin.addUser("notUser"); // warning

console.log(admin.getAllUsers());

admin.changeUserRole("Mira", "admin");
console.log(admin.getAllUsers());

admin.removeUser("Petro");
console.log(admin.getAllUsers());

console.log(Admin.isAdmin(admin));      // true
console.log(Admin.isAdmin(normalUser)); // maybe true if role changed to admin

// Message class
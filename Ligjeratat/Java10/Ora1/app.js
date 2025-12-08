"use strict";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    logIn() {
        console.log(`${name} has logged in!`);
    }

    logOut() {
        console.log(`${name} has logged out!`);
    }

}
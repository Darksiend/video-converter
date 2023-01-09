"use strict";
class User {
    constructor(name) {
        this.name = name;
    }
}
const user = new User("Anton");
console.log(user);
user.name = "Dima";
console.log(user);

"use strict";
class User {
    constructor(email, name, city = "Botswana") {
        this.email = email;
        this.name = name;
        this.city = city;
        this._courseCount = 1;
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw Error("Number of courses cannot be less than 1");
        }
        else {
            this._courseCount = courseNum;
        }
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        //will not extend private properties like _courseCount
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const user_one = new User("a@a.com", "Whatever");

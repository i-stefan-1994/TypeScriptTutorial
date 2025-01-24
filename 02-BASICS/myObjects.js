var User = {
    name: "Stefan",
    email: "email@email.com",
    isActive: true
};
// use case of objects is actually through functions
// function createUser({name: string, isActive: boolean}){
// }
//observe how we can pass a new parameter to the createUser function, if we first create an object and assign it to a variable
// let newUser = {name: "Stefan", isActive: false, email: "Whatever@whatever.com"}
// createUser(newUser);
// we tell it to return an object that always has these 2 properties
function createCourse() {
    return { name: this.name, isActive: this.isActive };
}
function createUser(user) {
    return { name: "", email: "", isActive: false };
}

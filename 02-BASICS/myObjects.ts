const User = {
    name: "Stefan",
    email: "email@email.com",
    isActive: true
}

// use case of objects is actually through functions

// function createUser({name: string, isActive: boolean}){

// }


//observe how we can pass a new parameter to the createUser function, if we first create an object and assign it to a variable
// let newUser = {name: "Stefan", isActive: false, email: "Whatever@whatever.com"}

// createUser(newUser);

// we tell it to return an object that always has these 2 properties
function createCourse(): {name: string, isActive: boolean}{
    return {name: this.name, isActive: this.isActive}
}

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }

// function createUser(user: User): User{
//     return {name: "", email: "", isActive: false}
// }

type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean,
    creditCardDetails?: number // ? = optional
}

let myUser: User = {
    _id: '1234',
    name: 's',
    email: 's@s.com',
    isActive: true 
}

// myUser._id = '456'; Cannot assign to '_id' because it is a read-only property.ts(2540)
myUser.name = 'ss'

type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}
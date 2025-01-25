"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
function identityFour(val) {
    return val;
}
// identityFour<Bottle>({})
// function getSearchProducts<T>(products: T[]): T{
//     //some db operations
//     const myIndex = 3
//     return products[myIndex];
// }
const getSearchProducts = (products) => {
    // some db operations
    const myIndex = 3;
    return products[myIndex];
};
function genericClassExample(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
genericClassExample(3, { connection: '123', username: '123', password: '124' });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
let programmingCourse = new Sellable();
programmingCourse.addToCart('C++');
console.log(programmingCourse.cart);

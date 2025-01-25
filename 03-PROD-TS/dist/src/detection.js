"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log('No ID provided');
        return;
    }
    return id;
}
function isAdmin(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
    return false;
}
function logValue(x) {
    if (x instanceof Date) {
        return x.toLocaleDateString();
    }
    return x.toUpperCase();
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        return "Fish food";
    }
    else {
        return "Bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    // return shape.side * shape.side
}
function getArea(shape) {
    switch (shape.kind) {
        case 'circle':
            return Math.PI * shape.radius ** 2;
            break;
        case 'square':
            return shape.side * shape.side;
            break;
        case 'rectangle':
            return shape.length * shape.width;
            break;
        default:
            const _defaultForShape = shape;
            return _defaultForShape;
    }
}

function detectType(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }

    return val + 3
}

function provideId(id: number | null){
    if(!id){
        console.log('No ID provided');
        return;
    }

    return id;
}

interface User{
    name: string;
    email: string
}

interface Admin extends User{
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }

    return false;
}


function logValue(x: Date | string){
    if (x instanceof Date){
        return x.toLocaleDateString();
    }

    return x.toUpperCase();
}

type Fish = {
    swim: () => void; //we have a method that returns nothing
}

type Bird = {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        return "Fish food"
    }else{
        return "Bird food"
    }
}

interface Circle{
    kind: "circle",
    radius: number
}

interface Square{
    kind: 'square'
    side: number
}

interface Rectangle{
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle

function getTrueShape(shape: Shape){
    if(shape.kind === "circle"){
        return Math.PI * shape.radius ** 2
    }

    // return shape.side * shape.side
}

function getArea(shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI * shape.radius ** 2
            break
        case 'square':
            return shape.side * shape.side
            break;
        case 'rectangle':
            return shape.length * shape.width
            break;
        default:
            const _defaultForShape: never = shape
            return _defaultForShape;
    }
}
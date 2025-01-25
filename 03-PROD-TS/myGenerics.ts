const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
    return val;
}

function identityTwo(val: any): any{
    return val;
}

function identityThree<Type>(val: Type): Type{
    return val;
}

function identityFour<T>(val: T): T{
    return val
}

interface Bottle{
    brand: string,
    type: string
}

// identityFour<Bottle>({})

// function getSearchProducts<T>(products: T[]): T{
//     //some db operations
//     const myIndex = 3
//     return products[myIndex];
// }

const getSearchProducts = <T>(products: T[]): T => {
    // some db operations
    const myIndex = 3;
    return products[myIndex];
};

interface Database{
    connection: string,
    username: string,
    password: string
}

function genericClassExample<T, U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}

genericClassExample(3, {connection: '123', username: '123', password: '124'});

interface Quizz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string
    subject: string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(product: T){
        this.cart.push(product);
    }
}

let programmingCourse = new Sellable();
programmingCourse.addToCart('C++');
console.log(programmingCourse.cart)
let score: number | string = 33
score = 44
score = "45"

type User2 = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
}

let randomName: User2 | Admin = {name: 'randomName', id: 334}
randomName = {username: 'randomAdminName', id: 334}

function getDbId(id: number | string){
    //making some API calls
    console.log(`DB id is ${id}`)
    // id.toLowerCase(); Fails because it's treating it, not as a string or number, but as a new data type
    if(typeof id === 'string'){
        id.toLocaleLowerCase()
    }
}

getDbId(3)
getDbId("5")

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
// const data3 : string[] | number[] = ["1", "2", 3] Will error out. In Arrays we can either have either all of a data type or another, so in our case, either all strings or all numbers
const data3: (string | number | boolean) [] = ["1", 2, "3", true] //this works due do how we annotate the types
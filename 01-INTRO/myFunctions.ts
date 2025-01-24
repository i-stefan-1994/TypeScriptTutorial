function addTwo (num: number){
    return num + 2;
}

addTwo(5);


function getUpper(val: string): string{
    return val.toUpperCase();
}

getUpper('hello');


function signUpUser(name: string, email: string, password: string, isPaid: boolean){

}

signUpUser('Steve', 'steve@gmail.com', 'whatever', true);

//passing default values
let loginUser = (name: string, email:string, isPaid:boolean = false /** = whatever is the default value notation*/) => {

}
class User{

    protected _courseCount = 1

    constructor(public email: string, public name: string, private city: string = "Botswana"){

    }

    get getAppleEmail(): string{
        return `apple ${this.email}`
    }

    get courseCount(): number{
        return this._courseCount;
    }

    set setCourseCount(courseNum: number){
        if(courseNum <= 1){
            throw Error("Number of courses cannot be less than 1")
        }else{
            this._courseCount = courseNum;
        }
    }

    private deleteToken(){ // method only accessible within the class
        console.log("Token deleted")
    }
}

class SubUser extends User{
    //will not extend private properties like _courseCount
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}

const user_one = new User("a@a.com", "Whatever")


interface User4 {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string | number,
    startTrial: () => string | boolean, // this needs to be a function that returns a string
    getCoupon(couponName: string, numberOfCoupons: number): number 
}

interface User4{
    githubToken: string
}

const randomName1: Admin1 = {dbId: 1, email: 's@s.com', userId: 3, githubToken: "whatever", role: "admin",
startTrial: () => {
    return "trial started";
},
getCoupon: (name: "Whatever name", nr: 123) => {
    return 10
}
};
// randomName1.dbId = 2 not allowed
randomName1.googleId = 3;
randomName1.googleId = "45";

interface Admin1 extends User4{
    role: "admin" | "ta" | "learner"
}
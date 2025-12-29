type User = {
    name: string,
    age: number
}

interface IUser {
    name:string,
    age:number
}

type Role = {
    role: "admin" | "user"
};

type UserWithRole = User & Role

interface IUserWithRole extends IUser{
    role: "admin" | "user"
}

const userOne: IUserWithRole = {
    name:"Winter Spring",
    age:74,
    role:"admin"
}

const userTwo: IUser = {
    name:"Clouds",
    age:55
}


type IsAdmin = boolean;

const isAdmin: IsAdmin = false;

//function

type Add = (num1:number,num2:number)=> number;

interface IAdd{
(num1:number,num2:number): number
}

const add: IAdd = (num1, num2) => num1 + num2

type Friends = string[];
interface IFriends{
    [index: number]: string
}
const friends: IFriends = ["A","B","C"]
console.log(friends)

console.log(add(5,6))

console.log(userOne)
console.log(userTwo)
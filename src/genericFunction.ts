
// const friends: string[] = ["Mr","Miss","Mrs","Ms"]
//With  angle bracket Array<string>
// generic
//Array[T] hisebe use hoy...

type GenericArray<value> = Array<value>
const friends: GenericArray<string> = ["Mr","Miss","Mrs","Ms"]
const rollNumbers: GenericArray<number> = [4,7,11];

const isEligbleList: GenericArray<boolean> = [true,false,true]


const userList: GenericArray<{name:string; age:number}> = [
    {
        name:"Mr. X",
        age:22,
    },
     {
        name:"Mr. Y",
        age:25,
    },
     {
        name:"Mr. X",
        age:22,
    },

] 

console.log(friends)
console.log(rollNumbers)
console.log(isEligbleList)



const createArrayWithGeneric = <T>(value : T)=> {
    return [value]
}

const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(222);
const arrObj = createArrayWithGeneric({
    id:123,
    name:"Next Level"
})

console.log(arrString)

type Coordinates<X,Y> = [X,Y]

const coordinate1: Coordinates<number,number> = [20,30];
const coordinate2: Coordinates<string, string> = ["20","40"]
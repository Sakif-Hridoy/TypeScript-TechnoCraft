// array, object

let bazarList: string[] = ["eggs","sugar","milk"]

let mixedArr: (string | number)[] = ["eggs", 12,"milk",45]

mixedArr.push('apple')
console.log(mixedArr)

// reference type: object

const user:{
    // values can be declared as type
    // organization:"Web Development",
    organization: string,
    firstName: string,
    middleName?: string,
    lastName:string,
    isMarried:boolean
} = {
    organization:'Backend Development',
    firstName:'Sakif',
    middleName:'Dewan',
    lastName:'Hridoy',
    isMarried: true
}

user.organization = "FrontEnd Development"
console.log(user)
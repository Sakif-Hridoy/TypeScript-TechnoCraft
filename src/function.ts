//Function
// arrow function, normal function


function addNormal(num1:number,num2:number): number{
    return num1 + num2
}


console.log(addNormal(2,2))

const addArrow = (num1:number,num2:number)=> num1 + num2;

console.log(addArrow(5,6))



const poorUser = {
    name:"Sakif",
    balance:0,
    addBalance(value:number){
       const totalBalance =  this.balance + value;
       return totalBalance;
    }

}


console.log(poorUser.addBalance(150000))
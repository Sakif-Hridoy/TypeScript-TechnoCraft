class Person{
    getSleep(){
        console.log(`I am A Happy Person. Sleep 8 hours`)
    }
}

class Student extends Person{
    getSleep(): void {
        console.log('I am a student. I sleep 7 hours')
    }
}

class NexTDev extends Person{
    getSleep(): void {
        console.log("I am Next Dev")
    }
}

const getSleepingHours = (param:Person)=>{
    param.getSleep()
}

//cretae Instance
const personOne = new Person();
const personTwo = new Student();
const personThree = new NexTDev();

console.log(personOne)
getSleepingHours(personOne)

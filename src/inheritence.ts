class Parent {
  name: string;
  age: number;
  address: string;

    constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getSleep(numOfHours: number) {
    console.log(`${this.name} Sleeps ${numOfHours} Hours a day`);
  }
}

class Student extends Parent{}

class Teacher extends Parent{
    designation:string; // own property
    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation = designation
    }
}

const studentOne = new Student("Sakif", 32, "Dhaka");
console.log(studentOne);
studentOne.getSleep(12);

const teacherOne = new Teacher("Hridoy",27,"Mymensingh","Senior Teacher")
console.log(teacherOne)
console.log(teacherOne.address)

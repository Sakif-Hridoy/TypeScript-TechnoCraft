// oop - class - object
class Animal{
    name:string
    species:string
    sound:string
    constructor(name:string,species:string,sound:string){
        this.name = name,
        this.species = species,
        this.sound = sound
    }
    makeSound(){
        console.log(`${this.name} is making sound: ${this.sound}`)
    }
}

const dog = new Animal('Lewish One',"ALgeria Dog",'Barks');
console.log(dog)
console.log(dog.species)
dog.makeSound()
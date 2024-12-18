class Animal{
    constructor (public name:string){}

    move(){
        console.log(`${this.name} is moving.`);
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`);
        
    }
}
const dog=new Dog('Ashh');
dog.move();
dog.bark();
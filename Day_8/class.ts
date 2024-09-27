class person{
    name:string;
    age:number;


    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log(`Hello , my name is ${this.name} and iam ${this.age} years old`);
    }
}
const person1=new person('Arul',21);
person1.greet();
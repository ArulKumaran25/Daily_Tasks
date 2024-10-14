class Employee{
    name:string;
    _age:number;

  constructor(name:string,age:number){
    this.name=name;
    this._age=age;
  }

  get age(){
    return this._age;
  }

  set age(value:number){
    this._age=value;
  }

  printName(){
    console.log(this.name);
  }
}

const employee:Employee=new Employee('Arul',21);
employee.printName();
console.log(employee.age);


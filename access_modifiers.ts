class Employee{
    public name:string;
    private salary:number;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    public getSalary(){
        return this.salary;
    }
}
const emp1=new Employee('Arul',50000);
console.log(emp1.name);
console.log(emp1.getSalary());


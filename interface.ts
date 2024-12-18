interface Employee{                                    
    readonly name:String;
    userId:number;
    getSalary(salary:number):number;
}

interface Manager extends Employee{
    experience:number;
}


class Fresher implements Employee{
    name:string;
    userId=398;

    getSalary(salary): number {
        return salary;
    }
    
}

class ManagerDetails implements ManagerDetails{  
   
    constructor(names:string) {
    this.name=names;
   }

    name="Manager";                        
    userId=396;                            

    experience:number=2;

    getSalary(salary: number): number {
        const extraPay=(salary/this.experience)/2;
        return salary+extraPay;
    }

    getEmployeeNames(name){
        return name;
    }
}

const fresher=new Fresher();
const manager =new ManagerDetails("Arul Kumaran");
console.log("-----Fresher Details-----");

console.log("Name: ",fresher.name="Fresher");
console.log("User ID: " ,fresher.userId);
console.log("Salary: ",fresher.getSalary(20000));

console.log("-----Manager Details-----");
console.log("Name: ",manager.name);
console.log("User ID: " ,manager.userId);
console.log("Salary: ",manager.getSalary(20000));

// console.log(manager.getEmployeeNames(fresher.name));
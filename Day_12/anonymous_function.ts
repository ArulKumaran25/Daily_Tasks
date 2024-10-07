import { Employee } from "../Day_11/types/employee.type";

// Hands-on in Anonymous-function

const getFullName=function(person:Employee):string{
    return person.firstName+" "+person.lastName;
}

const fullName:string=getFullName(person);
console.log(fullName);

 // Hands-on in Arrow functions

const getFullName1=(person:Employee):string=> person.firstName+" "+person.lastName;

const fullname:string=getFullName1(person);
console.log(fullname);
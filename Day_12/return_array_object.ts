import { Employee } from "../Day_11/types/employee.type";

//returning an array 
function getNames(...names:string[]):string[]{
    return names;
}
const names:string[]=getNames('Arul','Kumaran');
console.log(names);

//returning an object
function getPersonDetails(person:Employee):Employee{
    person.firstName="Arun";
    return person;
}

const employee:Employee=getPersonDetails(person);
console.log(employee);


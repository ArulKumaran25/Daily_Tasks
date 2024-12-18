import { Employee } from "../Day_11/types/employee.type";

const person:Employee={
    firstName:"Arul",
    lastName:"Kumaran",
    age:21,
    isMajor:true,
};

function getFullName(firstName:string,lastName:string):string{
    const fullName=firstName +" " + lastName;
    return fullName;
}

const fullName=getFullName(person.firstName as string,person.lastName as string);

console.log(fullName);

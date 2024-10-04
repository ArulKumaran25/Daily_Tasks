import { Employees } from "./types/employee.type.ts";


const person:Employees[]={
    name:"Arul",
    age: 0,
    isMajor:true,
};

function printPersonName(){
    console.log("Arul");
}

printPersonName();
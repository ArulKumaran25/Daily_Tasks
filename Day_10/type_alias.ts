type Employee={
    name:string | null; 
    age:number|undefined;
    isMajor:boolean; //Delaring the type of the variable 
}

let employees:Employee[] | null | undefined=[
    {name:"Arul",age:21,isMajor:true},
    {name:null,age:undefined,isMajor:true},
];

console.log(employees);


// name:string | null | undefined -- here we use union to declare the type of variable.
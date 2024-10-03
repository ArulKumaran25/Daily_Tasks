type employee={
    name:string;
    age:number;
    isMajor:boolean
}

let employees:any[]=[
    {name:'Arul',age:21,isMajor:true},
    {name:'Kumaran',age:21,isMajor:true}
];

let newEmployees=employees as employee[]; //assertions that insist the employee as an array type before the console 

console.log(newEmployees[1].name);
console.log(newEmployees[0].age);


type students={
    name?:string; // optional - ? symbol
    age:number;
    isPaid:boolean
}

let student:students[]=[
    {
        name:"Arul",
        age:21,
        isPaid: false
    },
    {
        name:"Kumaran",
        age:21,
        isPaid:true,
    }
];

console.log(student[0].name); // here the name is optional to declare

//type annotation

let studName:string='Arul Kumaran';
let studAge:Number=21;
let studEnrolled:boolean=true;
console.log(studName,studAge,studEnrolled);


//number

let studentId:Number=109;
let studentMarks:Number=95.5;
let hexvalue:number=0xa;
console.log(studentId,studentMarks,hexvalue);


//string

var course:string='Learn TypeScript';
var message:string='Welcome to the' ${course};
console.log(course);
console.log(message);



//boolean
var mark:number;
var hasPassed:boolean=mark>40;
let isGraduated:boolean=false;
console.log(isGraduated);

//object type

let student: {
    name: string;
    age: number;
    enrolled: boolean;
} = {
    name: 'Arul',
    age: 21,
    enrolled: true
};
console.log(student);



//array

let fruits:string[]=["apple","banana","orange"];
console.log(fruits);

 // tuples

let Details:[string,number,boolean]=['Arul',21,true];
console.log(Details);

//enum

enum colors{
    Red,
    Green,
    Yellow
};

 let Go:colors=colors.Green;
 console.log(Go);

let Stop:colors=colors.Red;
console.log(Stop);

let wait:colors=colors.Yellow;
console.log(wait);

//any

let randomValue:any='Hello';
randomValue=42;
randomValue=true;
console.log(randomValue);


//void

function showWarning():void{
    console.log("This mesaage is a warning");
}
showWarning();




 

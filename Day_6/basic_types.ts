

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




 

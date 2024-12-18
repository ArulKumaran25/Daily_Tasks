class Calculator{
   add(a:number,b:number):number;
   add(a:string,b:string):string;  
   add(a:number,b:string):string;
   add(a:string,b:number):string;    //example for method overloading

   add(a:any,b:any):any{
    if(typeof a==="number" && typeof b==="number"){
        return a+b;
    }
    else{
        return `${a} ${b}`;
    }
   }
}

const calc=new Calculator();

console.log(calc.add(5,10));
console.log(calc.add("Hello","TypeScript"));
console.log(calc.add(10,"Oranges"));
console.log(calc.add("Price",10));




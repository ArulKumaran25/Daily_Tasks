 function student(name:string,age:number,isMajor:boolean):void{
    console.log(name);
    console.log(age);
    console.log(isMajor); // example for normal functional parameters
 }

 student("Arul",21,true);


 function student1(name:string,age:number,isMajor?:boolean):void{
    console.log(name);
    console.log(age);
    console.log(isMajor); // example of optional parameters
 }

 student1("Arul",21); //prints undefined because the isMajor parameter is an optional parameter
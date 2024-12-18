function printPerson(name:String='Default Name',age:number,isMajor:boolean):void{
    console.log(name);  //Default_name is declared above
    console.log(age);
    console.log(isMajor);
}
printPerson("Anto",23,true); 
printPerson(undefined,20,true); //when the name is undefined then it prints the default value which is already declared
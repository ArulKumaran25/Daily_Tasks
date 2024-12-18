//optional parameters 

function getInformation(firstName:string,age?:number){
    return firstName +" "+age;
}
console.log(getInformation("Tom")); //only name is given , here the age is optional parameter
console.log(getInformation("Tom",21));


//default parameters

function setDetails(name:string,message:string="Welcome"){
    return message +" "+ name;
}
console.log(setDetails("Arul"));
console.log(setDetails("Arul","Hello"));
console.log(setDetails("Arul",undefined));






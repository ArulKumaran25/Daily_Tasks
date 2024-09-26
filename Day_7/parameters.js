//optional parameters 
function getInformation(firstName, age) {
    return firstName + " " + age;
}
console.log(getInformation("Tom")); //only name is given , here the age is optional parameter
console.log(getInformation("Tom", 21));
//default parameters
function setDetails(name, message) {
    if (message === void 0) { message = "Welcome"; }
    return message + " " + name;
}
console.log(setDetails("Arul"));
console.log(setDetails("Arul", "Hello"));
console.log(setDetails("Arul", undefined));

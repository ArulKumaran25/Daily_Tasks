"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person = {
    firstName: "Arul",
    lastName: "Kumaran",
    age: 21,
    isMajor: true,
};
function getFullName(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}
var fullName = getFullName(person.firstName, person.lastName);
console.log(fullName);

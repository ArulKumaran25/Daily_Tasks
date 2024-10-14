"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hands-on in Anonymous-function
var getFullName = function (person) {
    return person.firstName + " " + person.lastName;
};
var fullName = getFullName(person);
console.log(fullName);
// Hands-on in Arrow functions
var getFullName1 = function (person) { return person.firstName + " " + person.lastName; };
var fullname = getFullName1(person);
console.log(fullname);

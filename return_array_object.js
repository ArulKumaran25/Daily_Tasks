"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//returning an array 
function getNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names;
}
var names = getNames('Arul', 'Kumaran');
console.log(names);
//returning an object
function getPersonDetails(person) {
    person.firstName = "Arun";
    return person;
}
var employee = getPersonDetails(person);
console.log(employee);

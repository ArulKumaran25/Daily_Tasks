var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.greet = function () {
        console.log("Hello , my name is ".concat(this.name, " and iam ").concat(this.age, " years old"));
    };
    return person;
}());
var person1 = new person('Arul', 21);
person1.greet();

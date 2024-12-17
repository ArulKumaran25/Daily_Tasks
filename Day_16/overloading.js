var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.add = function (a, b) {
        if (typeof a === "number" && typeof b === "number") {
            return a + b;
        }
        else {
            return "".concat(a, " ").concat(b);
        }
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 10));
console.log(calc.add("Hello", "TypeScript"));
console.log(calc.add(10, "Oranges"));
console.log(calc.add("Price", 10));

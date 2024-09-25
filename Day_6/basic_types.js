//array
var fruits = ["apple", "banana", "orange"];
console.log(fruits);
// tuples
var Details = ['Arul', 21, true];
console.log(Details);
//enum
var colors;
(function (colors) {
    colors[colors["Red"] = 0] = "Red";
    colors[colors["Green"] = 1] = "Green";
    colors[colors["Yellow"] = 2] = "Yellow";
})(colors || (colors = {}));
;
var Go = colors.Green;
console.log(Go);
var Stop = colors.Red;
console.log(Stop);
var wait = colors.Yellow;
console.log(wait);
//any
var randomValue = 'Hello';
randomValue = 42;
randomValue = true;
console.log(randomValue);
//void
function showWarning() {
    console.log("This mesaage is a warning");
}
showWarning();

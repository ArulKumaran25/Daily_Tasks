//type annotation
var studName = 'Arul Kumaran';
var studAge = 21;
var studEnrolled = true;
console.log(studName, studAge, studEnrolled);
//number
var studentId = 109;
var studentMarks = 95.5;
var hexvalue = 0xa;
console.log(studentId, studentMarks, hexvalue);
//string
var course = 'Learn TypeScript';
var message = 'Welcome to the', $, course = (void 0).course;
console.log(course);
console.log(message);
//boolean
var mark;
var hasPassed = mark > 40;
var isGraduated = false;
console.log(isGraduated);
//object type
var student = {
    name: 'Arul',
    age: 21,
    enrolled: true
};
console.log(student);
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

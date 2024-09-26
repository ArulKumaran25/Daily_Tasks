//rest parameters
var _a = [1, 2, 3, 4, 5, 6, 7], a = _a[0], b = _a[1], rest = _a.slice(2);
console.log(rest);
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var count = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var i = numbers_1[_a];
        count += i;
    }
    return count;
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3));
console.log(addNumbers(1, 2, 3, 4));

function findMax(array) {
    var max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var num = [4, 2, 5, 1, 7];
console.log(findMax(num));
var numb = [1, 2, 3, 4]; // builtin function
var max1 = Math.max.apply(Math, numb);
console.log(max1);
var numbers = [1, 2, 3, 4, 5];
var max = numbers[0];
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);

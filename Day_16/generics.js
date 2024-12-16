function identity(value) {
    return value;
}
var num = identity(42);
console.log(num);
var str = identity("Hello All");
console.log(str);
var arr = identity([1, 2, 3, 4]);
console.log(arr);

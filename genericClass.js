var MyStorage = /** @class */ (function () {
    function MyStorage() {
        this.items = [];
    }
    MyStorage.prototype.add = function (item) {
        this.items.push(item);
    };
    MyStorage.prototype.remove = function (item) {
        this.items = this.items.filter(function (i) { return i !== item; });
    };
    MyStorage.prototype.getAll = function () {
        return this.items;
    };
    return MyStorage;
}());
// Example usage:
var stringStorage = new MyStorage();
stringStorage.add("Apple");
stringStorage.add("Banana");
stringStorage.add("Mango");
stringStorage.remove("Apple");
console.log(stringStorage.getAll()); // Output: ['Banana']
var numberStorage = new MyStorage();
numberStorage.add(10);
numberStorage.add(20);
numberStorage.add(5);
numberStorage.remove(20);
console.log(numberStorage.getAll()); // Output: [10, 20]

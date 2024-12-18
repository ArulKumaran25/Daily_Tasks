var car = /** @class */ (function () {
    function car(brand) {
        this.brand = brand;
    }
    return car;
}());
var myCar = new car('Toyota');
console.log(myCar.brand);

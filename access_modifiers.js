var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
var emp1 = new Employee('Arul', 50000);
console.log(emp1.name);
console.log(emp1.getSalary());

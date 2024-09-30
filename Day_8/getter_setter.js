var User = /** @class */ (function () {
    function User() {
        this._password = '';
    }
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this._password.replace(/./g, '*'); // Mask password with '*'
        },
        set: function (newPassword) {
            if (newPassword.length >= 8) {
                this._password = newPassword;
            }
            else {
                console.log('Password must be at least 8 characters long.');
            }
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User();
user.password = 'mypassword'; // Setting password
console.log(user.password); // Output: ********

class User{
    private _password:string = '';

    get password():string{
        return this._password.replace(/./g, '*');  // Mask password with '*'
    }
    set password(newPassword:string) {
        if(newPassword.length >= 8) {
            this._password=newPassword;
        } else{
            console.log('Password must be at least 8 characters long.');
        }
    }
}

const user=new User();
user.password='mypassword';  // Setting password
console.log(user.password);    // Output: ********

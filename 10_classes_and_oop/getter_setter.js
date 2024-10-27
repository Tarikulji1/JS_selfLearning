class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email
    }

    get password(){
        return `${this._password.}tarikul` 
    }

    set password(value){
        this._password = value
    }
}

const tarikul = new User('tarikul@chatgtpt.com', 'abc')
console.log(tarikul.password);
console.log(tarikul.E);

const User = {
    _email: 'tarikul@microsoft.com',
    _password: 'tarikul5896',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        return this._email = value
    }
}

console.log(User.email)

const tea = Object.create(User)

console.log(tea.email);
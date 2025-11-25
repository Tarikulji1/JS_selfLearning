class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const tarikul = new User("tarikulji1");
// console.log(tarikul.createId())

class Teacher extends User {
    constructor(email, username){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "i@apple.com")

console.log(iphone.createId())
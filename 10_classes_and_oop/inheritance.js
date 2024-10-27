class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("tarikul", "tarikul@amazon.com", "1223");

chai.addCourse()

const tea = new User("islam")

tea.logMe()

console.log(chai === tea);
console.log(chai instanceof Teacher);

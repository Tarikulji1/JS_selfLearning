// Parts of Object

// Object literal
const user = {
    username: "tarikul",
    loginCount: 9,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);
        console.log(this)
    }
}

console.log(user.username);
console.log(user.getUserDetails());
console.log(this);

// Construction function

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
        
    }

    return this
}

const UserOne = new User("tarikul", 12, true);
const UserTwo = new User("Rajesh", 15, false);

console.log(UserOne);
console.log(UserTwo.constructor());

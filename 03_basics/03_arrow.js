const user = {
    username: "tarikul",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.username = "islam"
// user.welcomeMessage()

console.log(this); // node environment under shows empty object {}

function keyThis() {
    let username = "tarikul"
    console.log(this.username);
}

keyThis() // undefined


const This = function() {
    let username = "tarikul"
    console.log(this.username);
}

This() // undefined


const arrowThis = () => {
    let username = "tarikul"
    // console.log(this.username); // undefined
    console.log(this); // empty object {}
}

arrowThis()


// () => {}    // basic arrow function

// explicite returns

const addTwoNum = (num1, num2) => {
    return num1 + num2
}
console.log(addTwoNum(3, 6));


// implesit returns

const addToNum = (num1, num2) => num1 + num2
console.log(addToNum(5, 6));

const addedToNum = (num1, num2) => (num1 + num2)
console.log(addedToNum(15, 6));

// const objretrun = () => {username: "tarikul"} // [Function: objretrun]
const objretrun = (num1, num2) => ({username: "tarikul"}) // [Function: objretrun]
console.log(objretrun(9, 9));

// const myArray = [1, 2, 3, 4, 5, 6, 7]

// myArray.forEach()
function sayMyName() {
    console.log("T");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("K");
    console.log("U");
    console.log("L");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, 5)

function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(7, 8)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("tarikul"));
// console.log(loginUserMessage("tarikul"));


function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// ... triple dot spread operator and rest operator
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "tarikul",
    prices: 399
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "islam",
    price: 499
})

const myNewArray = [200, 400, 100, 6000]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([678, 489, 3856, 699]));
// var c = 300 // avoid

// scopes means {}
// This is global scopes and it has access all outer and inner scopes variables

let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);

    // This is block scopes
}

console.log("OUTER: ", a);
// console.log(b);
// console.log(c);

// Nested Scope
function one() {
    const username = "tarikul"

    function two() {
        const website = "http://thehomeexplorer.com"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "tarikul"
    if (username === "tarikul") {
        const website = " http://thehomeexplorer.com"
        console.log(username + website)
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++++++ Intersting Concepts ++++++++++++++++++++++

console.log(addOne(5)); // it's acceptable
function addOne(num) {
    return num + 1
}


// console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
    return num + 2
} // call expressions
console.log(addTwo(5));
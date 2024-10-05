// if statement

const temperature = 41

if ( temperature === 40 ) {
    // console.log("less than 50");
} else {
    // console.log("temperature is greater than 50")
}

// console.log("Execute");
// <, >, <=, >=, !=, !==, ==, ===

const score = 200

if (score > 100) {
    const power = "fly"
    // console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("Balance more than 500"),console.log("Balance is 1000");   // avoid

if (balance < 500) {
    // console.log("Balance less than 500");
} else if (balance < 750) {
    // console.log("Balance less than 750");
} else if (balance < 900) {
    // console.log("Balance less than 900");
} else {
    // console.log("greater than 1200");
}


const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User logged in");
    
}
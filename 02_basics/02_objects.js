// singleton
// Object.create

// Object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Tarikul",
    "full name": "Tarikul Islam",
    [mySym]: "mykey1", // symbol access to object
    age: 22,
    location: "Murshidabad",
    email: "tarikulji@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email); // mostly used this syntax access
console.log(JsUser["email"]); // it's proper access
console.log(JsUser["full name"]); // because this reason
console.log(JsUser[mySym]);

JsUser.email = "tarikul@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "tarikul@microsoft.com"
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
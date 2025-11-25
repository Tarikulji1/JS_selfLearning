// https://tc39.es/ecma262

"use strict"; // Treat all JS code as newer version

// alert(3 + 3); // We are using nodejs, not browser

console.log(3 
    + 3
) // code readability should be high

console.log("Tarikul")

let name = "tarikul"
let age = 22
let isLoggedIn = false
let state;

/*
// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalon value
// undefined => value not assigned
// symbol => unique
*/

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Yes, JavaScript is a dynamically typed language.

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bigNumber = 8348060245565245n

// Reference (Non primitive)

// Array, Objects, Functions

const prophet = ["Adam A.S.", "Ibrahim A.S.", "Muhammad S.W."]

let myObj = {
    name: "Tarikul",
    age: 22
}

const myFunction = function () {
    console.log("Hello, World")
}

console.log(typeof prophet); // object
console.log(typeof myObj); // object
console.log(typeof myFunction); // object function
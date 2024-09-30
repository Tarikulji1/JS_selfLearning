console.log(2 > 1); // true
console.log(2 >= 1); // true
console.log(2 < 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true

// avoid
console.log("2" > 1); // true, automatic convert string to number
console.log("02" > 1); // true, automatic convert string to number
console.log(null > 0); // false, null treat as 0
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false


// ===
console.log("2" === 2);
const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 1820.1256
console.log(otherNumber.toPrecision(7));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++ Maths ++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-7));
console.log(Math.round(5.68)); // mostly used
console.log(Math.ceil(7.68));
console.log(Math.floor(5.36));
console.log(Math.min(5, 6, 9, 2, 55));
console.log(Math.max(5, 6, 9, 2, 55));

console.log(Math.random()); // it's give random number which is 0 between 1
console.log((Math.random() * 10) + 1); // It's not give me 0 value
console.log(Math.round((Math.random() * 10) + 1)); // It's give me rounded value
console.log(Math.floor((Math.random() * 10) + 1)); // It's give me floor value

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it's give always 10 between 20 value

// Array Part 1

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Muhammad S.W.", "Ibrahim A.S.", "Adam A.S.", "Moses A.S.", "Isha A.S."]

const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArr2[1]);


// Array methods

// myArr.push(6, 7) // add the number, end of the array
// myArr.pop() // remove the number, end of the array

// myArr.unshift(10, 0) // add the number, start of the array
// myArr.shift() // remove the number, start of the array

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr); 
// console.log(newArr);  // typeof string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("Slice method: ", myn1); // Slice's give a section of copy of an original array it's shallow copy
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)

console.log("Splice method: ", myn2); // Deep's give original array modification means deep copy
console.log("C ", myn2);


// Array Part 2

const marvel_heroes = ["Thor", "Ironman", "Spiderman", "Captain America", "Dr. Strange", "Dr. Banner"]
const dc_heroes = ["Superman", "Flash", "Batman", "Acquaman", "Wonder"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[6][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes); // spread operator

const myArr3 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realArr = myArr3.flat(Infinity)

console.log("myArr3: ", myArr3);
console.log("realArr flat myArr3: ", realArr);

console.log(Array.isArray("Tarikul"))
console.log(Array.from("Tarikul"))
console.log(Array.from({name: "tarikul"})) // Interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4))
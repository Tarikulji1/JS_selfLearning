const name = "tarikul"
const repoCount = 20

// console.log(name + repoCount + " Value"); // avoid

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tarikul-it-dot-com')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('k'));

const newString = gameName.substring(0, 4) // not allowed negative value
console.log(newString);

const anotherString = gameName.slice(-8, 4) // allowed negative value
console.log(anotherString);

const newStringOne = "      tarikul       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://thehomeexplorer.com/tarikul%20islam"

console.log(url.replace('%20', '-'));

console.log(`This Sundar word is includes on this url ${url.includes('Sundar')}.`);

console.log(gameName.split('-'));

// Deprecated
// anchor(), big(), blink(), bold()

// at() , charCodeAt()
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

index2 = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index2)}`);

console.log(`Character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index,)}`,);
// Expected output: "Character code 113 is equal to q"



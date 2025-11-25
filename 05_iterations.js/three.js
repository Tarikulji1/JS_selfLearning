// for of

// ["", "", ""]
// [{}, {}, {}]

const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
    console.log(`Number: ${num}`);    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps for unique values

const map = new Map()
map.set('IN', "India")
map.set('UAE', "United Arab Emirates")
map.set('PAK', "Pakistan")
map.set('BANG', "Bangladesh")
map.set('USA', "United States of America") // existing
map.set('USA', "United States America") // updated

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
} // myObject is not iterable
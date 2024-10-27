// const myName = "tarikul"
const myChname = "tarikul     "

// console.log(myName.trueLength());


const marvelHeroes = ["thor", "spiderman", "tony stark"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.tarikul = function(){
    console.log(`tarikul is present in all objects`);
}

Array.prototype.heyTarikul = function(){
    console.log(`Tarikul says Salam`)
}

heroPower.tarikul()
// marvelHeroes.tarikul()
// heroPower.heyTarikul()
marvelHeroes.heyTarikul()

// inheritance

const User = {
    name: "tarikul",
    email: "tarikul@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto_: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tarikul          ".trueLength()
"           iceTea".trueLength()
// Create an Object
const person = {
    firstName: "Tarikul",
    lastName: "Islam",
    age: 50,
    id: 1820,
    eyeColor: "blue",
    cars: {
      car1: "Ford",
      car2: "BMW",
      car3: "Fiat",
    },
  };
  person.fatherFirstName = "Samirul";
  person.fatherLastName = "Sk";
  /*
  delete person.firstName
  delete person["age"]
  console.log(person.firstName);
  console.log(person.cars);
  console.log(person.cars.car1);
  */
  
  // Add a Method
  // person.name = function () {
  //   return (this.fatherFirstName + " " + this.fatherLastName).toUpperCase();
  // };
  
  // Display Object Data
  // console.log("My father is " + person.name());
  
  // Display properties in a loop
  let text = "";
  for (let x in person) {
    text += person[x] + " ";
  }
  console.log(text.toUpperCase());
  
  // Using Object.values()
  const myArray = Object.values(person);
  console.log(myArray);
  
  // Using Object.entries()
  const fruits = { Banana: 300, Orange: 350, Apple: 400, Mango: 200 };
  
  let text2 = "";
  for (let [fruit, amount] of Object.entries(fruits)) {
    text2 += fruit + ": " + amount + "<br>";
  }
  console.log(text2);
  
  // Using JSON.stringify()
  console.log(JSON.stringify(fruits));
  
  // Using JSON.parse()
  console.log(JSON.parse(JSON.stringify(fruits)));
  
  // JS Object Constructors Function
  function Person(first, last, age, eye, id) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.id_no = id;
    this.Nationality = "Indian";
    this.religion = "Muslim";
    // A constructor function can also have methods
    this.fullname = function () {
      return this.firstName + " " + this.lastName;
    };
  }
  // Create Persons Object
  const myFather = new Person("Samirul", "Sk", 43, "black", 1);
  const myMother = new Person("Kohinur", "Bibi", 39, "black", 3);
  const mySelf = new Person("Tarikul", "Islam", 22, "blue", 5);
  const myBrother = new Person("Sadikul", "Sk", 21, "brown", 7);
  const myBrother2 = new Person("Jenarul", "Sk", 18, "black", 9);
  
  // Display Nationality
  console.log(myFather.Nationality);
  
  // Display Properties
  console.log("My father is " + myFather.id_no + ".");
  
  // Will NOT work
  Person.country = "India";
  
  // Adding a new property
  Person.prototype.country = "India";
  
  // Display properties
  console.log(myFather.country);
  console.log(myMother.fullname());
  
  // Add a Name method
  mySelf.changeName = function (newName) {
    this.firstName = newName;
  };
  // Change Name
  mySelf.changeName("Dr. Tarikul");
  
  // Display full name
  console.log(mySelf.firstName + " " + mySelf.lastName);
  
  // Adding a new property
  Person.prototype.changeReligion = function (name) {
    this.religion = name;
  };
  // Display religion
  myFather.changeReligion("Islam");
  console.log(myFather.religion);
  
  /*
  "<p>The typeof new Object() is " + typeof new Object() + "</p>" +
  "<p>The typeof new Array() is " + typeof new Array() + "</p>" +
  "<p>The typeof new Map() is " + typeof new Map() + "</p>" +
  "<p>The typeof new Set() is " + typeof new Set() + "</p>" +
  "<p>The typeof new Date() is " + typeof new Date() + "</p>" +
  "<p>The typeof new RegExp() is " + typeof new RegExp() + "</p>" +
  "<p>The typeof new Function() is " + typeof new Function() + "</p>";
  */
  // Math() object is a global
  
  /*
  Did You Know?
  Use object literals {} instead of new Object().
  
  Use array literals [] instead of new Array().
  
  Use pattern literals /()/ instead of new RegExp().
  
  Use function expressions () {} instead of new Function().
  */
  
  /*
  '<p>The typeof "" is ' + typeof "" + '</p>' +
  '<p>The typeof 10 is ' + typeof 10 + '</p>' +
  '<p>The typeof false is ' + typeof false + '</p>' +
  '<p>The typeof {} is ' + typeof {} + '</p>' +
  '<p>The typeof [] is ' + typeof [] + '</p>' +
  '<p>The typeof /()/ is ' + typeof /()/ + '</p>' +
  '<p>The typeof function(){} is ' + typeof function(){} + '</p>';
  */
  
  let text3 = "Hey, I am Tarikul Islam";
  console.log(text3.length);
  
  console.log(text3.at(0)); // ES2022 string method at()
  console.log(text3[0]);
  
  console.log(text3.charAt(1));
  
  console.log(text3.charCodeAt(0)); // the methods returns the UTF-16 code(an integer between 0 and 65535).
  
  let text4 = `Hey, I am "Tarikul Islam", then change Tarikul his name.`; //this is show string
  let text5 = new String("Hey, I am Tarikul Islam"); // this is show object
  
  console.log(typeof text4);
  console.log(typeof text5);
  console.log(text4 == text5);
  console.log(text4 === text5);
  
  // JS Objects are not compared by value, but by reference.
  
  console.log(text3.slice(10, 18)); // slice methode substring() similar
  console.log(text3.substr(10)); // substr()
  console.log(text3.substr(-18));
  
  console.log(text3.toUpperCase());
  console.log(text3.toLowerCase());
  console.log(text3.concat(". ", text4)); // concating two strings
  
  let text6 = "              Hey, I am Tarikul2.0                 ";
  console.log(text6.trim()); // trim()
  console.log(text6.trimEnd()); // trimStart & trimEnd() trimBoth()
  
  console.log(text6.repeat(6));
  console.log(text6.replace("Hey", "Hello")); // replaceAll()
  console.log(text6.replace(/HEY/i, "Hello Dear")); /i is case insensitive/;
  console.log(text4.replace(/Tarikul/g, "Sadikul")); /g is case global match/;
  
  let text7 = "a, b, c, d, e, f";
  let textArray = text7.split(","); //split()
  console.log(textArray[1]); // convert split() to array
  
  text7 = "";
  for ( let i = 0; i < textArray.length; i++ ) {
    text7 += textArray[i] + " ";
  };
  console.log(text7);
  
  // JS string search method
  console.log(text4.indexOf("Tarikul")); //if not then execute -1 (lastindexOf())
  console.log(text4.search("Islam")); // search() position match
  console.log(text5.search(/Tarikul/)); //search(/ /) pattern  [indexOf() & search() similar]
  console.log(text5.match("kul")); // [match(/ /) , match(/ /g) , match(/ /gi) & matchAll() similar]
  
  console.log(text4.includes("Islam")); //includes() is case sensitive
  console.log(text4.startsWith("Tarikul")); //if first is Tarikul then input is true [startsWith("Tarikul", 5) simila endsWith("Islam", 10)]
  
  let interpolation = `Hey, I am ${person.firstName} ${person.lastName}.`; // Template Literals
  console.log(interpolation); // Back-Tick `` interpolation
  
  //subsitution
  let price = 10;
  let VAT = 0.25;
  let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
  console.log(total);
  
  // JS Template String
  let header = "Template Literals";
  let tags = ["template literals", "javascript", "es6"];
  let html = `<h2>${header}</h2><ul>`;
  for (const x of tags) {
    html += `<li>${x}</li>`;
  };
  html += `</ul>`;
  console.log(html);
  
  // JS .toString()
  let text9 = 152;
  console.log(text9.toString());
  console.log((152).toString());
  console.log((100+52).toString());
  
  // JS .toExponentiial()
  let x = 9.656;
  console.log(x.toExponential());
  console.log(x.toExponential(2));
  console.log(x.toExponential(4));
  
  // JS .toFixed()
  console.log(x.toFixed(0));
  console.log(x.toFixed(2));
  console.log(x.toFixed(4));
  
  // JS .toPrecision()
  console.log(x.toPrecision());
  console.log(x.toPrecision(2));
  console.log(x.toPrecision(4));
  
  // JS .valueOf()
  console.log(x.valueOf());
  
  // Number new Date()
  let time = new Date("2020-01-03");
  console.log(Number(time)); // convert miliseconds to number
  
  // JS perseInt()
  console.log(parseInt("10")); // convert string to number
  console.log(parseInt("-10.33"));
  console.log(parseInt("10 years"));
  console.log(parseInt("Years 10")); // NaN
  
  console.log(parseFloat("-10.33")); // similar parseInt(" ") convert string to float number
  
  /* 
  Method	Description
  Number.isInteger()	Returns true if the argument is an integer
  Number.isSafeInteger()	Returns true if the argument is a safe integer
  Number.parseFloat()	Converts a string to a number
  Number.parseInt()	Converts a string to a whole number
  */
  // Global method = parseInt() & parseFloat() are similar Number.parseInt() & Number.parseFloat()
  
  console.log(Number.EPSILON); // smallest number that can be represented by current number system
  console.log(Number.MAX_VALUE); // largest number that can be represented by current number system
  console.log(x.MAX_VALUE);
  console.log(Number.MIN_VALUE); // smallest number that can be represented by current number system
  console.log(Number.MAX_SAFE_INTEGER);
  console.log(Number.MIN_SAFE_INTEGER);
  
  console.log(Number.POSITIVE_INFINITY);
  console.log(1/0);
  console.log(Number.NEGATIVE_INFINITY);
  console.log(-1/0);
  console.log(Number.NaN);
  console.log(100/"Apple");
  
  // JS Arrays
  const cars = ["Saab", "Volvo", "BMW", "Toyota", "Audi", "Ninja"];
  console.log(cars[2]);
  cars[0] = "Ford";
  console.log(cars);
  console.log(cars.length);
  console.log(cars.join(" * "));
  
  // JS Array Methods
  // pop() removes last element
  console.log(cars.pop());
  console.log(cars);
  
  // push() adds new element at the end
  console.log(cars.push("Mercedes"));
  console.log(cars);
  
  // shift() removes first element
  console.log(cars.shift());
  console.log(cars);
  
  // unshift() adds new element at the beginning
  console.log(cars.unshift("Kiwi"));
  console.log(cars);
  
  // copyWithin() copies array elements within the array
  console.log(cars.copyWithin(2, 0));
  console.log(cars.copyWithin(2, 0, 2));
  
  console.log(cars.sort());
  console.log(cars.reverse());
  
  // JS Array Constructor
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
  console.log(months.toSorted());
  console.log(months.toReversed());
  
  // JS Dates
  console.log(new Date()); //current date and time by default browsers timezone
  console.log(new Date(2024, 6, 14, 24, 60, 60, 60)); // year, month....
  console.log(Date.parse(2024, 6, 14));
  console.log(new Date().toLocaleString());
  console.log(new Date().toDateString());
  console.log(new Date().toTimeString());
  console.log(new Date().toUTCString());
  console.log(new Date().toISOString());
  console.log(new Date().getTime());
  console.log(new Date().setFullYear(2020));
  console.log(new Date().setMonth(6));
  
  // JS Math
  console.log("Math.PI: " + Math.PI);
  console.log("Math.E: " + Math.E);
  console.log("Math.SQRT2: " + Math.SQRT2);
  console.log("Math.SQRT1_2: " + Math.SQRT1_2);
  console.log("Math.LN2: " + Math.LN2);
  console.log("Math.LN10: " + Math.LN10);
  console.log("Math.LOG2E: " + Math.LOG2E);
  console.log("Math.LOG10E: " + Math.LOG10E);
  
  console.log("Math.round: " + Math.round(4.5)); // round to nearest integer
  console.log("Math.ceil: " + Math.ceil(4.5)); // round up
  console.log("Math.floor: " + Math.floor(4.5)); // round down
  console.log("Math.trunc: " + Math.trunc(4.5));
  console.log("Math.sign: " + Math.sign(-4.5)); // return -1, 0, 1
  console.log("Math.pow: " + Math.pow(2, 3)); // x=2, y=3 , x power of y
  console.log("Math.sqrt: " + Math.sqrt(625)); // square root
  console.log("Math.abs(-2.3): " + Math.abs(-2.3)); // absolute value positive value
  
  console.log("Math.sin: " + Math.sin(90 * Math.PI / 180)); // sin
  console.log("Math.cos: " + Math.cos(0 * Math.PI / 180)); // cos
  
  console.log("Math.min: " + Math.min(0, 150, 30, 20, -8, -200)); // minimum value
  console.log("Math.max: " + Math.max(0, 150, 30, 20, -8, -200)); // maximum value
  
  console.log("Math.random: " + Math.random()); // random number between 0 and 1
  console.log("Math.random: " + Math.random() * 10);
  
  console.log("Math.log: " + Math.log(1));
  console.log("Math.log: " + Math.log(2));
  console.log("Math.log: " + Math.log(10)); // natural logarithm
  console.log("Math.log2: " + Math.log2(8));
  console.log("Math.log10: " + Math.log10(1000));
  
  console.log(Boolean("")); // undefined, null, false, 0, NaN, ("" empty string) [false]
  console.log(Boolean("Tarikul")); // true
  console.log(new Boolean("Tarikul")); // object not boolean
  
  let x1 = new Boolean("Tarikul");
  let y1 = new Boolean("Tarikul");
  console.log(x1 == y1); // false Comparing two JavaScript objects always return false.
  console.log(x1 === y1); // false
  
  // JS Ternary Operator
  let age = null;
  let text11 = "you are too young to drive.";
  let result = age ?? text11;
  
  console.log((age < 18) ? "Too young" : "Old enough");
  console.log("Tarikul, " + result); // nullish null / undefined
  
  // let car?.name = "Ford"; if car is null then name is undefined
  
  // JS if, if else, if else if
  const time2 = new Date().toLocaleTimeString();
  if (time2 < 6) {
    console.log("Good Mornig");
  }  else if (time2 < 12) {
    console.log("Good Noon");
  } else {
    console.log("Good Evening");
  };
  
  // JS switch
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  };
  console.log("Today is " + day);
  
  // 2nd way
  switch (new Date().getDay()) {
    case 6:
      text12 = "This is Saturday";
      break;
    case 0:
      text12 = "This is Sunday";
      break;
    default:
      text = "Looking forward to the Weekend";
  };
  console.log(text12);
  
  // 3rd way
  switch (text13 = (3)) {
    case 0:
      text13 = "Off";
      break;
    case 1:
      text13 = "On";
      break;
    default:
      text13 = "No value found";
  };
  console.log(text13);
  
  // JS Loops
  
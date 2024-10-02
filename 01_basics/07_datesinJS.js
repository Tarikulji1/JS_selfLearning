// Dates

let myDate = new Date()
console.log(myDate);
// 2024-10-01T06:21:38.074Z

console.log(myDate.toString());
// Tue Oct 01 2024 06:22:55 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString());
// Tue Oct 01 2024

console.log(myDate.toISOString());
// 2024-10-01T06:28:29.063Z

console.log(myDate.toJSON()); 
// 2024-10-01T06:28:56.776Z

console.log(myDate.toLocaleDateString()); 
// 10/1/2024

console.log(myDate.toLocaleString()); 
// 10/1/2024, 6:29:47 AM

console.log(myDate.toLocaleTimeString()); 
// 6:30:25 AM

console.log(myDate.toTimeString()); 
// 06:30:58 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toUTCString()); 
// Tue, 01 Oct 2024 06:31:29 GMT

console.log(myDate.getTimezoneOffset()); 
// 0

console.log(typeof myDate); // give's object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let CreatedDate = new Date(2024, 0, 23, 10, 35)
console.log(CreatedDate.toLocaleString()); // 1/23/2023, 10:35:00 AM

let myCreatedDate2 = new Date("2024-07-15")
console.log(myCreatedDate2.toLocaleString()); // 7/15/2024, 12:00:00 AM [foreign country prefer]

let myCreatedDate3 = new Date("01-15-2024")
console.log(myCreatedDate3.toLocaleString()); // 1/15/2024, 12:00:00 AM [India country prefer]

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate3.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay() - 1);

// Created complex Date and Time - use Bacticks interpulation
// `${newDate.getDay()} and the time `

const newDate2 = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate2);
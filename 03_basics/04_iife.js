// Immediately Invoked Function Expressions (IIFE)


(function demo(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // If ; semicolon not given not working

( (name) => {
    // Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('tarikul');
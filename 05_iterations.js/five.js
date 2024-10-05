const coding = ["js", "ruby", "python", "java", "cpp"]

coding.forEach( function (item) {
    console.log(item);
    
})

coding.forEach((value)=>{
    console.log(value);
    
})

function printMe(item) {
    console.log(`Programming language: ${item}`);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
    console.log(item, index, arr);
    
})


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})
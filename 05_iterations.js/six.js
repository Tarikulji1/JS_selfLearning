/*
const coding = ["js", "ruby", "python", "java", "cpp"]

const values = coding.forEach( (item) => {
    // console.log(item);
    return item
})

console.log(values);
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
const newNums = myNums.filter( (num) => {
    return num > 4
})

console.log(newNums);

const newNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
newNum.forEach( (num) => {
    if (num > 4) {
        newNum.push(num)
    }
})

console.log(newNum);

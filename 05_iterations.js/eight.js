const myNums = [1, 2, 3, 4];

const myTotal = myNums.reduce( function (accumulator, currentvalue) {
    console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);  
    return accumulator + currentvalue
}, 0)
console.log(myTotal);

const myTotals = myNums.reduce( (accumulator, currentvalue) => (accumulator + currentvalue), 0)
console.log(myTotals);

const shoppingCart = [
    {
        itemName: "JS Course",
        price: 999
    },
    {
        itemName: "Python Course",
        price: 2999
    },
    {
        itemName: "C++ Course",
        price: 3696
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
    {
        itemName: "MERN Course",
        price: 6999
    },
]

const priceToPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);

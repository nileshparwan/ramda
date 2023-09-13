const R = require("ramda");

const initialData = [['a', 1], ['b', 2], ['c', 3]];
const myMap = new Map(initialData);
console.log(myMap.get('a')); // Output: 1

let i = 0
const resultObject = initialData.reduce((accumulator, currentValue, currentIndex, array)=>{
    console.log(
        {accumulator:accumulator, currentValue:currentValue, currentIndex:currentIndex, array:array}
    )
    const [key, value] = currentValue; 
    // accumulator[key] = value; 
    // return accumulator; 
    return 1+i
}, {})
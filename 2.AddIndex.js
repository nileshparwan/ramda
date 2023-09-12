const R = require("ramda");



// addIndex
const addIndexArray = [10, 20, 30, 40];
const mapping = R.map(addIndexArray); // this function only creates a map of the array. 
const mapAndDoubleValue = R.map(R.multiply(2), addIndexArray); // map arrayIndex and multiple the value by 2
const addIndex = R.addIndex(R.map)(R.add, addIndexArray);// create a new list iteration, map arrayIndex and multiple the value by 2
console.log(
    addIndexArray,
    mapping,
    mapAndDoubleValue,
    addIndex
);
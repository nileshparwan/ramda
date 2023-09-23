const { sort, descend, identity, head, converge, equals, compose } = require("ramda");

const isValidArr = [6, 3, 4, 5, 2]; 
const isInvalidArr = [3, 4, 6, 1]; 

const sortByBiggestFirst = sort(descend(identity));

const isFirstElementBiggest = converge(equals, [
    head,
    element => compose(head, sortByBiggestFirst)(element)
])

console.log("isValidArr", isFirstElementBiggest(isValidArr))
console.log("isInvalidArr", isFirstElementBiggest(isInvalidArr))
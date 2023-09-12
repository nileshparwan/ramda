const R = require("ramda");

// map index from the right 
const indexFromRightArray = [10, 20, 30, 40];
const revmap = (fn, arr) => R.map(fn, R.reverse(arr));

// reverses the array from right to left 
revmap((para1) => {
    console.log({
        para1
    });
}, indexFromRightArray) // [40, 30, 20, 10]

// telling to map this array from right to left 
const revMapIndex = R.addIndexRight(revmap); 
revMapIndex((val, idx)=>{
    console.log({
        val,
        idx
    })
}, indexFromRightArray)
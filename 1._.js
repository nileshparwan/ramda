const R = require("ramda");

// the __ function
const dec1 = R.subtract(1); // or R.subtract(1, R.__); 
const dec2 = R.subtract(R.__, 1);
console.log({
    dec1: dec1(10),
    dec2: dec2(10)
});

// add
const add = R.add(10, 20);
console.log({
    add
});

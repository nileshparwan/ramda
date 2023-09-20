// composition => its a process of combining two or more functions to create new function. 

const { compose, split, toLower, join, map, pipe } = require("ramda");

// example 1
// const toSlug = input => compose(
//     encodeURIComponent,
//     join("-"),
//     map(toLower),
//     split(" ")
// )(input)

// example 2
const toSlug = compose(
    encodeURIComponent,
    join("-"),
    map(toLower),
    split(" ")
)

// example 3
const toSlugUsingPipe = pipe(
    split(' '),
    map(toLower),
    join("-"),
    encodeURIComponent
); 

const slug = toSlug("This is composition"); 
const slugUsingPipe = toSlugUsingPipe("This is composition"); 
console.log(`slug: ${slug}`);
console.log(`slugUsingPipe: ${slugUsingPipe}`);
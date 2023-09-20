const { curry } = require("ramda");

// example 1
var add = function (a, b) {
    return a + b; 
}
var curriedAdd = curry(add); 
console.log(curriedAdd(1,2));


// example 2
const objects = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    }
];

// get id
// normally we would retrieve the id's like this. 
const ids = objects.map(object => {
    return object.id
})
console.log({ids})

// with currying. 
/**
 * @property is the key
 * @object is a single object {}
 */
var get = curry(function (property, object) {
    return object[property]
}); 

var getIds = objects.map(get('id')); 
console.log({getIds});

// example 3 
var map = curry(function(fn, values){
    return values.map(fn); 
});

var getNewIds = function(objects){
    return objects.map(get('id')); 
}

console.log({
    getNewIds: getNewIds(objects)
})

// example 4 
var fetchFromServer = async function () {
    return {
        user: 'jack',
        posts: [
            {
                title: "why curry?"
            },
            {
                title: 'functional programming'
            }
        ]
    };
};

async function fetchData() {
    try {
        const data = await fetchFromServer();
        const posts = get('posts')(data);
        const titles = map(get('title'))(posts);
        console.log({titles})
    } catch (error) {
        console.error(error);
    }
}

fetchData()
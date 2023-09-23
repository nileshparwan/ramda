const { __, filter, where, pluck, compose, equals, lt } = require("ramda");

const products = [
    {
        name: 'Jacket',
        price: 50, 
        category: 'clothes',
        count: 20
    },
    {
        name: 'boots',
        price: 100, 
        category: 'clothes',
        count: 20
    },
    {
        name: 'iphone',
        price: 200, 
        category: 'electronics',
        count: 20
    },
    {
        name: 'ipad',
        price: 250, 
        category: 'electronics',
        count: 20
    },
]

const getProductName = compose(
    pluck('name'),
    filter(where({
        category: equals('clothes'),
        count: lt(__, 50), 
        price: lt(__, 100)
    }) )
)(products);

console.log(`get product names ${JSON.stringify(getProductName)}`);
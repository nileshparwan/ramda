const { propEq, find, either, both } = require("ramda");

const user = [
    {
        id: 1, 
        name: "john1"
    },
    {
        id: 2, 
        name: "john2"
    },
    {
        id: 3, 
        name: "john3"
    }
]

const isIdEqualto = propEq(2, "id");
const john2 = find(isIdEqualto, user);
console.log(john2);


// example 2 
const wasBornInCountry = propEq("UK", "birthCountry");
const wasNaturalised = person => Boolean(person.wasNaturalizedDate);
const isOver18 = person => person.age >= 18;
const isCitizen = either(wasBornInCountry, wasNaturalised);
const isEligibleToVote = both(isOver18, isCitizen);

const testUser = {
    age: 20,
    birthCountry: "UK"
};

console.log(isEligibleToVote(testUser)); 
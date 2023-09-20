const { path, pathOr } = require("ramda");

const bil = {
    nickname: "bill",
    country: "uk",
    personal: {
        profile: {
            name: "Bill",
            surname: "williams",
            age: 20
        }
    }
};

const mike = {
    nickname: 'Mike',
    country: "us",
    personal: {
    }
};


const getSurname = user => path(['personal', 'profile', 'surname'], user);
const getSurnameOr = user => pathOr("not set", ['personal', 'profile', 'surname'], user);
console.log(getSurname(bil)); // williams
console.log(getSurname(mike));

console.log(getSurnameOr(bil));
console.log(getSurnameOr(mike));
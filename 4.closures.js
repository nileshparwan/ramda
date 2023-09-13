var addTo = function (passed) {
    var add = function (inner) {
        return passed + inner;
    };

    return add;
};

var addThree = addTo(3);
var addOne = addTo(1);

// passed  = 1, inner = 2
console.log(addTo(1)(2));

// inner = 2, passed = 1 ( see above )
console.log(addOne(2)); 
const R = require('ramda');

const multiply4 = R.multiply(4);
console.log(multiply4(5));

const split2 = R.split(' ');
console.log(split2('a b c d e'));

const tripleList = R.map(R.multiply(3));

console.log(tripleList([2, 4, 5, 6, 9]));



//
const greater = function (a,b) {
    return a > b ? a : b
};


const maximum = R.reduce(greater, 0, [2, 4, 6, 92]);

console.log(maximum);

const splitWords = R.split(' ');

console.log(splitWords('Hello we are not coming home today'));
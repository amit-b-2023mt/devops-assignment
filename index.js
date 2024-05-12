const sortAscending = require("./sortAscending.js");
const sortDescending = require("./sortDescending.js");
const array = [10, 6, 50];

console.log(
	"Ascending order of the numbers 10, 6, 50 is"
);
const arrOutputAscending = sortAscending(array)
console.log("{",...arrOutputAscending,"}");

console.log(
	"Descending order of the numbers 10, 6, 50 is"
);
const arrOutputDescending = sortDescending(array)
console.log("{",...arrOutputDescending,"}");
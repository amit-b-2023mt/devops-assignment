const sortAscending = require("./sortAscending.js");
const array = [10, 6, 50, 1];

console.log(
	"Ascending order of the numbers 10, 6, 50, 1 is"
);
const arrOutput = sortAscending(array)
console.log("{",...arrOutput,"}");
var _ = require("lodash");

function sortDescending(arr) {
	return arr.slice().sort((a, b) => b - a);
}

module.exports = sortDescending;
var _ = require("lodash");

function sortAscending(arr) {
	return arr.slice().sort((a, b) => b - a);
}

module.exports = sortAscending;
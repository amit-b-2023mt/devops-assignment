var _ = require("lodash");

function sortAscending(arr) {
	return arr.slice().sort((a, b) => a - b);
}

module.exports = sortAscending;
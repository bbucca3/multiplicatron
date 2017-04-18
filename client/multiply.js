const multiply = function(a, b) {
	if (arguments.length === 0) {
		return NaN;
	}
	else {
		var total = 1;
		for (keys in arguments) {
			total *= arguments[keys];
		}
		return total;
	}
};

module.exports = multiply;


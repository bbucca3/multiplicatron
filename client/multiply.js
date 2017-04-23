const multiply = function(array) {
	
	var total = 1;
	for (keys in array) {
		total *= array[keys];
	}
	return total;
	
};

module.exports = multiply;
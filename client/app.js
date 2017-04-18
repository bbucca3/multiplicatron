function multiply(a, b){
	var sum = 1;
	for (keys in arguments) {
		console.log(arguments[keys]);
		sum *= arguments[keys];
	}
	return sum;
}

console.log(multiply(6, 5));
console.log(multiply(6, -5, -5));
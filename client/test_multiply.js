const multiply = require('./multiply.js');

class TestSuite {

	runTest(testName) {
		const result = this[testName]();
		console.log(result, testName);
	}

	runTests() {
		Object.getOwnPropertyNames(Object.getPrototypeOf(this))
			.filter(prop => this[prop] instanceof Function)
			.filter(prop => prop.indexOf('test') !== -1)
			.forEach(testName => this.runTest(testName));
	}

	assertEquals(a, b) {
		return a === b;
	}

	testMultiplyPositiveNumbers() {
		return this.assertEquals(multiply([5, 7]), 35);		
	}

	testMultiplyNegativeNumbers() {
		return this.assertEquals(multiply([-2, -2]), 4);		
	}

	testMultiplyPositiveAndNegativeNumbers() {
		return this.assertEquals(multiply([5, -7]), -35);		
	}

	testMultiplyThreePositiveNumbers() {
		return this.assertEquals(multiply([5, 7, 2]), 70);		
	}

	testMultiplyThreeNegativeNumbers() {
		return this.assertEquals(multiply([-5, -7, -2]), -70);		
	}
}

const testSuite = new TestSuite();
testSuite.runTests();
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const multiply = require('./multiply.js');

class ViewManager {

	connectEventHandlers() {
		// wire up event handler for form submit
		document.getElementById('form-numbers')
			.addEventListener(
				'submit',
				this.onSubmit.bind(this));

			document.getElementById('add-factor')
			.addEventListener(
				'click',
				this.addFactor.bind(this));
	}

	addFactor(event){
		event.preventDefault();
	}

	onSubmit(event){
		// block form from submitting
		// (which would refresh page)
		event.preventDefault();

		// grab number values as strings
		let num1 = document.getElementById('input-num1').value;
		let num2 = document.getElementById('input-num2').value;

		// cast strings to ints
		num1 = parseInt(num1, 10);
		num2 = parseInt(num2, 10);

		// add numbers
		const sum = multiply(num1, num2);

		// output
		this.renderSum(sum);
	}

	renderSum(sum) {
		document.querySelector('.sum').textContent = sum;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
},{"./multiply.js":2}],2:[function(require,module,exports){
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

console.log(multiply([2, 3, 4]));

module.exports = multiply;
},{}]},{},[1]);

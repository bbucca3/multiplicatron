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

	addFactor(event) {

		event.preventDefault();

		var addedFactors = document.getElementById('added-factors');
	  	var div = document.createElement('div')
	  	var addedFactor = document.createElement('input');
	  	addedFactor.type = 'text';
	  	addedFactor.className = 'input-num';
	  	addedFactor.autocomplete = 'off';
	  	addedFactor.style = 'margin-top: 100px;';
	  	div.appendChild(addedFactor);
	  	addedFactors.appendChild(div);
	}

	onSubmit(event){
		// block form from submitting
		event.preventDefault();

		var total;

		var numbers = Array.from(document.getElementsByClassName('input-num'))
                   .filter(input => input.className === 'input-num')
                   .map(element => parseInt(element.value, 10))  
                   .filter(num => !Number.isNaN(num));

                   console.log(numbers);

	    if (numbers.length >= 2) {
	      total = multiply(numbers);
	    }

	    else if (numbers.length === 0 || total === undefined) {
	      total = NaN;
	    }		

		// output
		this.renderSum(total);
	}

	renderSum(sum) {
		document.querySelector('.sum').textContent = sum;
	}
}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();
},{"./multiply.js":2}],2:[function(require,module,exports){
const multiply = function(array) {
	
	var total = 1;
	for (keys in array) {
		total *= array[keys];
	}
	return total;
	
};

module.exports = multiply;
},{}]},{},[1]);

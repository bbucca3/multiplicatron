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
	  	div.appendChild(addedFactor);
	  	addedFactors.appendChild(div);
	}

	onSubmit(event){
		// block form from submitting
		event.preventDefault();

		var total;

		let numbers = Array.from(document.getElementById('form-numbers').elements)
                   .filter(element => element.nodeName === 'INPUT')
                   .map(element => parseInt(element.value, 10))  
                   .filter(num => !Number.isNaN(num));
	    if (numbers.length >= 2) {
	      total = multiply(numbers);
	    }
	    else if (total === undefined) {
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
/* Local Storage exercise */
var FormRecall = (function () {

    var init, 
        storeFieldValue, 
        populateForm, 
        clearStorage,
        form = document.getElementById('adduser'),
        clearButton = document.getElementById('clear-button'),
        restoreButton = document.getElementById('restore-button'),
        nameInput = document.getElementById("input-name"),
        emailInput = document.getElementById("input-email");

    init = function () {
        form.addEventListener("keyup", storeFieldValue);
        restoreButton.addEventListener("click", populateForm);
        clearButton.addEventListener("click", clearStorage);      
    };
    
    storeFieldValue = function (event) {
        // Get the "type" of node from event.target
        var typeOfnode = event.target.nodeName;
        // Only act if type is "INPUT" (this would expand to include other form elements in a more complex form)
        if(typeOfnode === "INPUT") {
            // Get the value from field
            var itemValue = event.target.value;
			window.localStorage.setItem(event.target.name, itemValue);
        }
    };
    
    populateForm = function (event) {
        event.preventDefault();

		var inputs = form.querySelectorAll('input'),
			max = inputs.length,
			i,
			currentInput;
		
        // Loop through form elements
		for(i = 0; i < max; i++){
			currentInput = inputs[i];
             // Populate form with stored values if the current value exists
			if( window.localStorage.getItem(currentInput.name) ) {
				currentInput.setAttribute('value', window.localStorage.getItem(currentInput.name));
			}
		}
    };

    clearStorage = function (event) {
        event.preventDefault();
		window.localStorage.clear();
    };

    return {
        init: init
    };

})();

FormRecall.init();

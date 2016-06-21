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

    /**
     * The init function sets up the event handlers.
     * Ideally, it would also accept a config object/arguments so 
     * that there is less hard-coding of values in the app.
     */
    init = function () {
        form.addEventListener("keyup", storeFieldValue);
        restoreButton.addEventListener("click", populateForm);
        clearButton.addEventListener("click", clearStorage);      
    };
    
    /**
     * This function runs on the "keyup" event.
     * It stores the text typed in the field in localStorage, using the
     * field's name as the key.
     */
    storeFieldValue = function (event) {
        // Get the "type" of node from event.target
        var typeOfnode = event.target.nodeName;
        // Only act if type is "INPUT"
        if(typeOfnode === "INPUT") {
            
            // Get the value of field
            var itemValue = event.target.value;
            
            // Get the "name" attribute of field
            var itemName = event.target.getAttribute("name");
            
            // Store "value", using the input "name" as the key
            window.localStorage.setItem(itemName, itemValue)
            console.log("Stored : " + itemValue + " in " + itemName);
        }
    };
    
    /**
     * This function populates the form with data stored in localStorage
     * It no longer uses hard-coded values.
     * Instead, it loops through the form's children that are <input> elements.
     * It processes any of the children that have a "type" attribute equal to "text", "email", "url", or "tel"
     * (these are all plain text types, so easy to handle!)
     * To enhance... 
     * Function should support other form elements (textarea, select, etc.)
     * Function should cater for the other "types" that an <input> tag can have (radio, checkbox, etc.)
     */
    populateForm = function (event) {
        var storedValue,
            formEls = form.querySelectorAll('input'),
            numInputs = formEls.length,
            i,
            inputEl,
            inputName,
            inputType;
        
        event.preventDefault();

        for (i = 0; i < numInputs; i++) {
            inputEl = formEls[i];
            inputType = inputEl.getAttribute('type');
            inputName = inputEl.getAttribute('name');
            if (inputType == 'text' || inputType == 'email' || inputType == 'url' || inputType == 'tel' ) {
                storedValue = window.localStorage.getItem(inputName)
                if(storedValue !== null) {
                    inputEl.value = storedValue;
                }
            }
        }
        
    };
    
    /**
     * This function deletes the data stored in localStorage
     */
    clearStorage = function (event) {
        event.preventDefault();
        window.localStorage.clear();
    };

    return {
        init: init
    };

})();

FormRecall.init();

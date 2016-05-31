var ProjectList = (function () {
    
    // Define variables
    var addItem,
		removeItem;

    // Define methods here...
    addItem = function(itemDesc) {
    	template = '<li class="element">' + this.textContent + '</li>'; 
    	// Add it to list var
    	// NOTE: use 'this' or 'event.target'?
	};
	removeItem = function(item) {
		// Remove list clicked item from list
	};
	
	// Public methods
	obj = {
		add: addItem,
		remove: removeItem
	};
	
    // Return an object
    return obj;
    
})();

// Declare variable
var list,
	item,
	itemDesc;

// Asign variable
list = document.getElementById('element-wrapper');
item = document.getElementById('add-button');
itemDesc = document.getElementById('element-description');

// Declare listeners

item.addEventListener('click', function(event){
	// Add
	ProjectList.add(itemDesc);
});


list.addEventListener('click', function(event){
	// Remove
	ProjectList.remove(event.target);
});


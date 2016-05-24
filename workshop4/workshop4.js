// A "template" for the module or revealing module pattern
// Copy this chunk code and use it as a foundation for your own modules
// ... obviously, you should change the name of the variable to something more appropriate ;)
var ShoppingList = (function () {
    
    // Define variables here...
    var list = new Array(),
		item,
		addItem,
		removeItem,
		getList,
		numberOfItems;
		
    // Define methods here...
    addItem = function(item) {
		if(!list.indexOf(item)){
			list.push(item);
		}
	};
	removeItem = function() {};
	getList = function() {};
	numberOfItems = function() {
		return list.length;
	};
	
	// Public methods
	obj = {
		add: addItem,
		remove: removeItem,
		get: getList,
		count: numberOfItems
	};
	
    // Return an object
    return obj;
    
})();
ShoppingList.add('tree');
console.log(ShoppingList.count());

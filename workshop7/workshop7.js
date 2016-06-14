var ProductLister = (function () {

    // Define the variables used by module
    var init,
        callAjax,
        jsonToHTML,
        addHTMLToDom,
		attr,
		api,
		filters = document.getElementById('filters'),
		productsList = document.getElementById('products-list'),
		productDataLength,
		currentItem,
		contentHTML
		,i;

    // The "init" function, sets up event handlers
    init = function () {
		filters.addEventListener("click", function(event) {
			callAjax(event)
		});
    };

    // Function to run when a category button is clicked
    // Handler is assigned to parent, so we use event delegation!
    callAjax = function (event) {
        event.preventDefault();
		attr = event.target.getAttribute("data-category");
		
		api = $.ajax({
			url: "http://gerardluskin.com/city/service/products/?callback=&category=" + attr,
			dataType: "jsonp"
		}).done(function (data, text, api) {
			//jsonToHTML(api);
			console.log(api);
		}).fail(function (api, text, err) {
			console.log("Failed");
		});

    };

    // Function to convert data returned via ajax to HTML
    jsonToHTML = function (productData) {
		
		productDataLength = productData.products.length;
		console.log(productDataLength);
		for(i = 0; i < productDataLength; i++){
			var currentItem = productData.products[i];
			console.log(currentItem);
			contentHTML = '<ul>';
			contentHTML += '<li>' + currentItem.category + '</li>';
			contentHTML += '</ul>';
		}
		
		addHTMLtoDOM(contentHTML);
    };

    // Function to add the HTML to the DOM
    addHTMLtoDOM = function (html) {
		console.log(html);
    };

    // All we need to return is the init function
    return {
        init: init
    };

})();

// Initialise "ProductLister"...
ProductLister.init(document);



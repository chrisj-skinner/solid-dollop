var ProductLister = (function () {

    // Define the variables used by module
    var init,
        callAjax,
        jsonToHTML,
        addHTMLToDom,
        filters = document.getElementById("filters"),
        productsList = document.getElementById("products-list");

    // The "init" function, sets up event handlers
    init = function () {
        filters.addEventListener(
            "click",
            callAjax
        );
    };

    // Function to run when a category button is clicked
    // Handler is assigned to parent, so we use event delegation!
    callAjax = function (event) {

        var categoryValue = event.target.getAttribute("data-category"),
            urlStem = "http://gerardluskin.com/city/service/products/?callback=&category=",
            apiURL,
            productRequest,
            productArray;

        event.preventDefault();

        if (categoryValue != null) {
            
            // Clicked element was a button
            
            // Remove any existing HTML
            productsList.innerHTML = "";
            
            // Extras 1: Add a loading graphic
            productsList.classList.add("loading");
            
            // Make api URL (append categoryValue to urlStem)
            apiURL = urlStem + categoryValue;
            
            // Set up the AJAX request
            productRequest = $.ajax({
                url: apiURL,
                dataType: "jsonp"
            });
            
            // Add a "success" callback to handle returned data
            productRequest.done(function (ajaxData) {
                // Extras 2: Check for API errors (e.g. category not found)
                if (ajaxData.error) {
                    // handle error
                    var errorMessage = '<p class="text-danger">Sorry, an error has occurred</p>';
                    // Use addHTMLtoDOM to insert error message in page
                    addHTMLtoDOM(errorMessage);
                } else {
                    // Extract product array from returned object
                    productArray = ajaxData.products;
                    // pass it to jsonToHTML function
                    jsonToHTML(productArray);                
                }
            });
            
            // Extras 2: Add a "failure" callback for real server errors (404, etc.)
            productRequest.fail(function (data) {
                // Server returned an error
                var errorMessage = '<p class="text-danger">Sorry, our service is currently unavailable</p>';
                // Use addHTMLtoDOM to insert error message in page
                addHTMLtoDOM(errorMessage);
            });
        }
        
    };

    // Function to convert data returned via ajax to HTML
    jsonToHTML = function (productData) {
        var i, 
            currentItem,
            numProducts = productData.length,
            htmlList = [],
            finalHtml;
        
        htmlList.push('<ul class="products">');
        
        for (var i = 0; i < numProducts; i++) {
            // Copy product object to currentItem (easier to type!)
            currentItem = productData[i];
            // make the HTML list tag with properties from currentItem object
            htmlList.push('<li class="' + currentItem.category + '">');
            htmlList.push('<a href="' + currentItem.url + '">' + currentItem.name + '</a> - ');
            htmlList.push('<span>Price: ' + currentItem.price + '</span>');
            htmlList.push('</li>');
        }
        
        htmlList.push('</ul>');
        
        // Join the array parts
        finalHtml = htmlList.join("\n");
        
        // Pass the compiled HTML to DOM insertion function
        addHTMLtoDOM(finalHtml);
    };

    // Function to add the HTML to the DOM
    addHTMLtoDOM = function (html) {
        // Extras 1: Remove the loading graphic
        productsList.classList.remove("loading");
        // Add the products HTML
        productsList.insertAdjacentHTML("afterbegin", html);
    };

    // All we need to return is the init function
    return {
        init: init
    };

})();

// Initialise "ProductLister"...
ProductLister.init();



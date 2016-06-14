// Store API URL in variable for convenience
// Change value of "name" parameter to get different person's details
var apiURL = "http://gerardluskin.com/city/service/people/?callback=&name=dave";

// +++++++++++++++++++++++++++++++++++++
// Option 1 - Using the "done" callback
// +++++++++++++++++++++++++++++++++++++

// The AJAX request
var myRequest = $.ajax({
    url: apiURL,
    dataType: "jsonp"
});

// Register a callback for when the request is "done"
myRequest.done(function (data) {
    // Deal with "unknown person" errors (i.e. "alex")
    // If returned data object has "error" property, person is unknown
    if (data.hasOwnProperty("error")) {
        console.log("API returned an error object...");
        console.log(data.error);
    } else {
        console.log(data.firstName);
        console.log(data.lastName);
        console.log(data.age);
    }
});


// +++++++++++++++++++++++++++++++++++++
// Option 2 - using the "success" argument with $.ajax()
// +++++++++++++++++++++++++++++++++++++

$.ajax({
    url: apiURL,
    dataType: "jsonp",
    success: function (data) {
        // Deal with "unknown person" errors (i.e. "alex")
        // If returned data object has "error" property, person is unknown
        if (data.hasOwnProperty("error")) {
            console.log("API returned an error object...");
            console.log(data.error);
        } else {
            console.log(data.firstName);
            console.log(data.lastName);
            console.log(data.age);
        }
    }
});


// +++++++++++++++++++++++++++++++++++++
// OPTION 3: same as option 1, but loops through array of names
// +++++++++++++++++++++++++++++++++++++

var urlStem = "http://gerardluskin.com/city/service/people/?callback=&name=",
    apiNames = ["dave", "tom", "jean", "alex"],
    numNames = apiNames.length,
    apiURL,
    i;

for (i = 0; i < numNames; i++) {
    
    // Join "name" from array with urlStem to make full URL
    apiURL = urlStem + apiNames[i];
    
    // The AJAX request
    var myRequest = $.ajax({
        url: apiURL,
        dataType: "jsonp"
    });

    // Register a callback for when the request is "done"
    myRequest.done(function (data) {
        // Deal with "unknown person" errors (i.e. "alex")
        // If returned data object has "error" property, person is unknown
        if (data.hasOwnProperty("error")) {
            console.log("API returned an error object...");
            console.log(data.error);
        } else {
            console.log(data.firstName);
            console.log(data.lastName);
            console.log(data.age);
        }
    });
   
}


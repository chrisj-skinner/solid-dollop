$( document ).ready(function() {
    var api,
		names = [],
		i,
		namesMax;
		
	names = ["dave", "tom", "jean", "alex"];
	namesMax = names.length;
	
	for( i = 0; i < namesMax; i++) {

		api = $.ajax({
			url: "http://gerardluskin.com/city/service/people/?callback=&name=" + names[i],
			dataType: "jsonp"
		}).done(function (data, text, api) {
			if(!data.hasOwnProperty('error')){
				console.log("Firstname: " + data.firstName + "\n\r Lastname: " + data.lastName + "\n\r Age: " + data.age);
			} else {
				console.log("Name was not recognised");
			}
		}).fail(function (api, text, err) {
			console.log("There was an error: " + text);
		});
	}
});
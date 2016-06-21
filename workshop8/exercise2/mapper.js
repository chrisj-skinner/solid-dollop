var Mapper = (function () {

    var init, 
        initializeMap, 
        getPosition, 
        positionSuccess, 
        positionError,
        gMap,
		button = document.getElementById("find-me"),
        mapWrapper = document.getElementById("map-wrapper"), 
        mapOptions = {
            center: new google.maps.LatLng(45, 5),
            zoom: 4
        };

    init = function () {
		
		google.maps.event.addDomListener(
			window,
			"load",
			initializeMap
		);
        // Set up event handlers
		button.addEventListener('click', getPosition);
    };
       
    initializeMap = function (options) {
        // Create map instance
		gMap = new google.maps.Map(
			mapWrapper,
			mapOptions
		);
    };    

    getPosition = function (event) {
        // Retrieve user's location
        event.preventDefault();
		console.log('firing');
		navigator.geolocation.getCurrentPosition(
			positionSuccess,
			positionError
		);
    };    
    
    positionSuccess = function (position) {
        // Success callback for geolocation
		console.log(position);
		var newLat,
			newLng,
			newLoc,
			marker;
			
		newLat = position.coords.latitude;
		newLng = position.coords.longitude;		
		newLoc = new google.maps.LatLng(newLat, newLng);
		marker = {
			position: newLoc,
			map: gMap,
			title: 'Click to zoom'
		},
		myMarker;
		
		
		// Set the marker
		myMarker = new google.maps.Marker(marker);
		// Center Map
		gMap.setCenter(newLoc);
		// Set the Zoom
		gMap.setZoom(12);
		
		// Add Evenlistener to myMarker
		myMarker.addListener('click', function() {
			gMap.setZoom(25);
			gMap.setCenter(marker.getPosition());
		});
    };
    
    positionError = function (err) {
		alert(err.message);
        // Error callback for geolocation
    };

    return {
        init: init
    };

})();
Mapper.init();



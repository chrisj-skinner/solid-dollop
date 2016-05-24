// The element to attach the listener to
var buttonWrapper = document.getElementById('button-wrapper');

/*
buttonWrapper.addEventListener('click', function(event){

	console.log(event.target);
	if(event.target.getAttribute('data-action')) {
		var attr = event.target.getAttribute('data-action');
		console.log(attr);
	}
	
	

});
*/
$( document ).ready(function() {
    console.log( "ready!" );
	
	$('#button-wrapper').on('click', 'data-action', function(){
		console.log('exists');
	});
});

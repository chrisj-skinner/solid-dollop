$( document ).ready(function() {
    console.log( "ready!" );


	var previousFilter,
		selection,
		i,
		boxes;

	$('.list').on('click', 'input', function(event){
		$(event.target).attr('data-filterMe', 'true');
	
		// Go get all the list inputs with data-filterMe="true"
		// incase there have been previous clicks
		selection = $('.list').attr('data-filterMe', 'true').attr('class');

		// Hide all results
		$('.boxes').removeClass('visible');

		// Store the length
		max = selection.length;
		for(i=0; i < max; i++){
			// For every element with a data-filterMe="true" remove classes based
			// on the elements data-type
			$('.boxes' + '.' + selection[i].attr("data-type")).addClass('visible');
		}
	
		// Or
		$('.boxes ' + selection).addClass('visible);
	});

});
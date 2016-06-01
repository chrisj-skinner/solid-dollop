$( document ).ready(function() {
    console.log( "ready!" );


	var i,
		boxes,
		row,
		classNames = [],
		reset,
		results;

	$('.list').on('click', 'input', function(event){

		// Set defualt
		// reset = false;

		// Get the title of the row to be used later
		row = $(this).parents('.list').attr('data-attribute');
		
		// Hide all results
		$('.results').find('.car').removeClass('active');

		if( $(this).attr('value') == ('clear-' + row) ) {
			console.log('reset button: ' + row);
			//reset = true;

		} else {
			// Set all to FALSE
			$(this).parents('.list[data-attribute="' + row + '"]').find('input').attr('data-filter', 'false');

			// Set the current clicked to TRUE
			$(this).attr('data-filter', 'true');

		};

		

		// Go get all the list inputs with data-filter="true"
		// incase there have been previous clicks
		classNames = $(this).parents('.list-wrap').find('input[data-filter="true"]');

		$.each(classNames, function(index, className) {
			
			className = $(className).attr('id');
			console.log(className);
			console.log(index);


			// It would be nice to allow for a larger loop (if more filters are added in the future)
			// Currently basing the following statement on an array size of 2
			// Filtering down the already filterd results
			// if(index !== classNames.length) didn't work
			if(index === 0) {
				
				results = $('.results').find('.' + className);
				results.addClass('active');
			} else {
				
				results = $('.results').find(':not(.active.' + className + ')');
				console.log(results);
				results.removeClass('active');
				console.log('index is not 1! See. ' + index);
			}
		});
	});

});
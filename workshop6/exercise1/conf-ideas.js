$( document ).ready(function() {
    console.log( "ready!" );


	var i,
	    index,
		boxes,
		row,
		classNames = [],
		className,
		resetNames = [],
		resetName,
		results;

	$('.list').on('click', 'input', function(event){

		// Set defualt
		// reset = false;

		// Get the title of the row to be used later
		row = $(this).parents('.list').attr('data-attribute');
		
		// Hide all results
		$('.results').find('.car').removeClass('active');

		$(this).parents('.list[data-attribute="' + row + '"]').find('input').attr('data-filter', 'false');

		if( $(this).attr('value') == ('clear-' + row) ) {
			console.log('reset button: ' + row);

			//reset = true;
			resetNames = $('.list[data-attribute="' + row + '"]').find('input:not([id="clear-' + row + '"])');

			console.log(resetNames);
			$.each(resetNames, function(i, resetName) {
				resetName = $(resetName).attr('id');
				console.log(resetName);
				$('.results').find('.' + resetName).removeClass('active');
			});

		} else {

			// Set the current clicked to TRUE
			$(this).attr('data-filter', 'true');

		};

		// Go get all the list inputs with data-filter="true"
		// incase there have been previous clicks
		classNames = $(this).parents('.list-wrap').find('input[data-filter="true"]');
		console.log('length is: ' + classNames.length);

		// If all data-filter="false" exit and reset results
		// this means another filter name group has been set to 'clear' 
		if(classNames.length === 0) {
			$('.results').find('.car').addClass('active');
			// exit
			return;
		} 

		$.each(classNames, function(index, className) {
			
			className = $(className).attr('id');
			console.log(className);
			console.log(index);


			// It would be nice to allow for a larger loop (if more filters are added in the future)
			// Currently basing the following statement on an array size of 2
			// Filtering down the already filterd results
			// if(index !== classNames.length) didn't work
			if(index === 0) {
				console.log('its; 0');
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
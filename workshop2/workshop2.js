(function(){
	var element = document.getElementById('header'),
		content = new Array(),
		joined,
		first = 'This is a first item',
		second = 'This is a second item',
		another = 'And another one!',
		last = '...and a last one';
		
		content.push('<ul>');
			content.push('<li>');		
				content.push(first);	
			content.push('</li>');	
			content.push('<li>');	
				content.push(second);	
			content.push('</li>');
			content.push('<li>');
				content.push(another);
			content.push('</li>');
			content.push('<li>');
				content.push(last);
			content.push('</li>');	
		content.push('</ul>');		
		
		joined = content.join("\n");
		element.insertAdjacentHTML('afterend', joined);
		
}());
// The elements to attach "click" handlers to
var docBody = document.body,
    parentElement = document.getElementById('parent'),
    childElement = document.getElementById('child');
	
// Add your listeners here...

/*
docBody.addEventListener('click', function(event){
	// console.log('I am the body');
	console.log(event.target);
	event.stopPropagation();
});

parentElement.addEventListener('click', function(event){
	// console.log('I am the parent');
	console.log(event.target);
	event.stopPropagation();
});

childElement.addEventListener('click', function(event){
	// console.log('I am the child');
	console.log(event.target);
	event.stopPropagation();
});
*/

docBody.addEventListener('mouseleave', function(event){
	console.log('I am the body');
	// console.log(event.target);
	// event.stopPropagation();
});

parentElement.addEventListener('mouseleave', function(event){
	console.log('I am the parent');
	// console.log(event.target);
	// event.stopPropagation();
});

childElement.addEventListener('mouseleave', function(event){
	console.log('I am the child');
	// console.log(event.target);
	// event.stopPropagation();
});
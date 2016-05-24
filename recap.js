/**
 * JavaScript Recap Exercise
 */

// Get a reference to the "button 1" element
var button1 = document.getElementById('button1'),
	button2 = document.getElementById('button2'),
	button3 = document.getElementById('button3'),
	button4 = document.getElementById('button4'),
	header = document.getElementById('headline'),
	content = document.getElementById('content');

// call toggleClass function
toggleClass(button2, 'yellow');
toggleClass(button3, 'green');	

// toggleClass function
function toggleClass(button,color){

	button.addEventListener('click', function (event) {
    
		if(header !== null && button !== null) {
			header.classList.toggle(color);
		}

	});
};	
	
// Attach an event listener to the button's "click" event
button1.addEventListener('click', function (event) {
    
	if(header !== null) {
		header.textContent = 'Clicked';
		header.classList.add('clicked');
	}

});

/* Toggle function replaces the below
button2.addEventListener('click', function (event) {
    
	if(header !== null) {
		header.classList.toggle('yellow');
	}

});
*/

/*
button3.addEventListener('click', function (event) {
    
	if(header !== null) {
		header.classList.toggle('green');
	}

});
*/
button4.addEventListener('click', function (event) {
    
	if(content !== null) {
	var paragraph = '<p>I am a new paragraph</p>';
		content.insertAdjacentHTML('beforeend', paragraph);
	}

});

var myObject = {
colour: "red",
action: function () {
console.log('Hello');
}
};
console.log(myObject.colour); // red
myObject.action(); // Logs: Hello

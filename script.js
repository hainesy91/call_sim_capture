console.log("Hello World");

//Code for checking if localStorage is compatible in browser
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
};

document.addEventListener("DOMContentLoaded", function(e) {
	console.log("DOM fully loaded and parsed")
});

document.getElementById('end').addEventListener('click', function(e) {
	event.preventDefault();
	console.log('The call has ended')
});

//Add an event listener for form submissions
document.getElementById('start').addEventListener('click', function() {
	event.preventDefault();
	//Get the value of the number field
	var number = document.getElementById('number').value;
	//Save the number in localStorage
	localStorage.setItem('number', number);
});

var d = new Date();

document.getElementById('start').addEventListener('click', function() {
	event.preventDefault();
	console.log(d);
})

var phoneCalls = {
	
}




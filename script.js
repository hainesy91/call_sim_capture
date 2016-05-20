console.log("Hello World");

//Code for checking if localStorage is compatible in browser
if(typeof(Storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
};

var currentCall = null;

// Object should contain:
// callDirection
// callNumber
// callStart (as ms)
// callEnd (as ms)
// callDuratioh (in ms, default 0)

document.addEventListener("DOMContentLoaded", function(e) {
	console.log("DOM fully loaded and parsed")
});

//Add an event listener for form submissions
document.getElementById('start').addEventListener('click', function(e) {
	e.preventDefault();
	startCall();
});

document.getElementById('end').addEventListener('click', function(e) {
	e.preventDefault();
	endCall();
});

// Check to see if the new call is different
function isNewCall() {

}

function getCallDirection() {
	event.preventDefault();
	var selected = document.getElementById('callState');
	var status = selected.options[selected.selectedIndex].value;
	return status;
}

function getCallNumber() {
	var phoneNumber = document.getElementById("number").value;
}

function startCall() {
	var d = new Date();
	
	console.log(currentCall);
	currentCall = "Bananas";

	//Get the value of the number field
	// var number = document.getElementById('number').value;
	// //Save the number in localStorage
	// localStorage.setItem('number', number);
}

function endCall() {
	var d = new Date();
	console.log(currentCall);
	// handle end of call and store data
}

function addCallToLog() {

}

// document.getElementById('start').addEventListener('click', function() {
// 	event.preventDefault();
// 	console.log(d);
// })

// function callDetails () {
// 	event.preventDefault();
// 	var phoneNumber = document.getElementById("number").value;
// 	console.log('phoneNumber');
// };

//Code for getting the phone number value
// var phoneNumber = document.getElementById("number").value;

// //Code for getting the value of the drop down options
// var selected = document.getElementById('callState');
// var status = selected.options[selected.selectedIndex].value;




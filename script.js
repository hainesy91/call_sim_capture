document.addEventListener("DOMContentLoaded", function(e) {
	//Add an event listener for form submissions
	document.getElementById('start').addEventListener('click', function(e) {
		e.preventDefault();
		onCallStateChange('start');
	});

	document.getElementById('end').addEventListener('click', function(e) {
		e.preventDefault();
		onCallStateChange('end');
	});
});

// Object should contain:
// callDirection
// callNumber
// callStart (as ms)
// callEnd (as ms)
// callDuratioh (in ms, default 0)
var currentCall = null;

/**
	callStateType: string: either incoming or outgoing
**/
function onCallStateChange(callStateType) {

}

// Do something when a new call is started
function startNewCall() {

}

// Do something when the current call ends
function endCurrentCall() {

}

// Log the currentCall to LocalStorage
function logCurentCallToLocaLStorage() {

}

// Create a new Call Object and return it
function createCurrentCallObject() {

}
document.addEventListener("DOMContentLoaded", function(e) {
	//Add an event listener for form submissions
	document.getElementById('start').addEventListener('click', function(e) {
		e.preventDefault();
		onCallStateChange('start');
	});

	document.getElementById('stop').addEventListener('click', function(e) {
		e.preventDefault();
		onCallStateChange('stop');
	});
});

// Object should contain:
// callDirection
// callNumber
// callStart (as ms)
// callEnd (as ms)
// callDuratioh (in ms, default 0)
var currentCall = null;

//Variable that contains the status of the call state


/**
	callStateType: string: either start or stop
**/
function onCallStateChange(callStateType) {
	if (callStateType === "start") {
		currentCall.isCurrentCall()
	} 
};

//Function that checks if the value of current call
function isCurrentCall() {
	return (currentCall === null);
};

// Do something when a new call is started - update the status of the currentCall object
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
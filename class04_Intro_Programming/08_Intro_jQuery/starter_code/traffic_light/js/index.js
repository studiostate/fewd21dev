//Implement the red light using jQuery. Don't forget to add the script tags.

$( document ).ready(function() {
    console.log( "ready!" );
   $('#stopButton').click(stopLight);
   $('#slowButton').click(slowLight);
	$('#goButton').click(goLight);

function stopLight() {
	clearLights();
	$("#stopLight").css("background-color","red");
	console.log("I'm red!");
}
function slowLight() {
	clearLights();
	$("#slowLight").css("background-color","yellow");
	console.log("I'm yellow!");
}
function goLight() {
	clearLights();
	$("#goLight").css("background-color","Magenta");
	console.log("I'm Crazy!");
}

function clearLights() {
	$('.bulb').css("background-color","black");

}

});
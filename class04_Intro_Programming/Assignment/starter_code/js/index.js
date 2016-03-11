$(document).ready(function() {

	$(".readmore").click(readmore);
	$(".readless").click(readless);
	$(".learnmore").click(learnmore);
	$(".learnless").click(learnless);

	function readmore(e) {
		e.preventDefault();
		$("#show-this-on-click").slideToggle();
		$("#test").slideToggle();
		$(".readmore").slideToggle();

	}

	function readless(e) {
		e.preventDefault();
		$("#show-this-on-click").slideToggle();
		$(".readmore").slideToggle();
		$("#test").slideToggle();


	}

	// function learnmore(e) {
	// 	e.preventDefault();

	// 	$("#learnmoretext").slideToggle();
	// }


});
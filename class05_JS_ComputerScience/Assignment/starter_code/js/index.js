

jQuery(document).ready(function(){

	jQuery("#submit").click(function(){

		var cityvalue = jQuery("#city").val();

		if(moodvalue == "new york" || moodvalue == "new york city" || cityvalue == "nyc" ){
			$("body").attr("class", "nyc");
		}
		if(moodvalue == "san francisco" || moodvalue == "sf" ){
			$("body").attr("class", "sf");
		}
		if(moodvalue == "los angelos" || moodvalue == "la" ){
			$("body").attr("class", "la");
		}
		if(moodvalue == "austin" ){
			$("body").attr("class", "austin");
		}
		if(moodvalue == "sydney" ){
			$("body").attr("class", "sydney");
		}

});

});
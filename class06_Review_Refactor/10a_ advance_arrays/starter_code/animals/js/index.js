var images = ["images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];

var 1 = 0;

var maxImages = images.length-1;

//function for back button

function previousImage() {
	//if increment variable is greater than 0, increment back, else stay at max images, else increment image.
	if(i > 0) {
		i--;//this means step back ++ means go forward
	} else {
		i = maxImages;
	}
	changeImage(i);

}

//function for next button
function nextImage() {
	//if increment var is less than maxImages, increment, else start at 0, else change image.
	if(i < maxImages) {
		i++;
	} else {
		i = 0;
	}
	changeImage(i);
}

//function to change images
function changeImage(){
	//update img src to current image.
	$("#carousel-image").attr("src",images[1]);

}

//event listeners
$(document).ready(function() {

	//next image click
	$("#next").on("click,nextImage")
	//previous image click
	$("back").on("click", previousImage);

	//


});
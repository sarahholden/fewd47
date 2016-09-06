// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var images=['images/image_1.jpg', 'images/image_2.jpg', 'images/image_3.jpg', 'images/image_4.jpg', 'images/image_5.jpg', 'images/image_6.jpg'];

// Set a variable for the current position(index) and give it an initial value of 0
var currentPosition = 0;


// EVENTS ---------

// Listen for click events on the next and previous buttons
$('#next').on('click', function () {
	// Update the current position
 	if (currentPosition === images.length - 1) {
 		currentPosition = 0;
	} else {
		currentPosition += 1;
	}

	// Update the src attribute to the urls that's stored at the currentPosition in the array
	$('#image-to-vote-on').attr('src', images[currentPosition]);


});

$('#prev').on('click', function () {
	// Update the current position

	if (currentPosition === 0 ) {
		currentPosition = images.length - 1;
	} else {
		currentPosition -= 1;
	}

	// Update the src attribute to the urls that's stored at the currentPosition in the array
	$('#image-to-vote-on').attr('src', images[currentPosition]);

});
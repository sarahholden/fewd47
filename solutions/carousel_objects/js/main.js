// GLOBAL VARIABLES -------

// Store an array of image paths in a variable
var images = [
	{
		src: 'images/image_1.jpg',
		votes: 0,
		caption: 'Box with Type' 
	},
	{
		src: 'images/image_2.jpg',
		votes: 0,
		caption: 'Amperstand Notebook' 
	},
	{
		src: 'images/image_3.jpg',
		votes: 0,
		caption: 'Cameras' 
	},
	{
		src: 'images/image_4.jpg',
		votes: 0,
		caption: 'Don\'t just stand there' 
	},
	{
		src: 'images/image_5.jpg',
		votes: 0,
		caption: 'Leather Notebook' 
	},
	{
		src: 'images/image_6.jpg',
		votes: 0,
		caption: 'All Products' 
	},

];

// Set a variable for the current position(index) and give it an initial value of 0
var currentIndex = 0;


// EVENTS ---------

// Listen for click events on the next and previous buttons
$('#next').on('click', function () {
	if (currentIndex === images.length - 1) {
		currentIndex = 0;
	} else {
		// Update the current position
		currentIndex += 1;
	}


	// Update source, clear out select menu
	changeImage();

});

$('#prev').on('click', function () {
	// Update the current position
	if (currentIndex === 0) {
		currentIndex = images.length - 1;
	} else {
		currentIndex -= 1;
	}

	// Update the source and empty out the #your-vote select menu
	changeImage();

});

// Listen for a change event on the #your-vote select menu
$('#upvote').on('click',function () {

	// Add one vote to the current score at the current index
	images[currentIndex].votes += 1;

	// Display the amount of likes on the page.
	$('#votes').html("Likes: " + images[currentIndex].votes);
});

$('#downvote').on('click',function () {

	// Subtract one vote from the score at the current position.
	images[currentIndex].votes -= 1;

	// Display the amount of likes on the page.
	$('#votes').html("Likes: " + images[currentIndex].votes);
});

function changeImage(){

	// Update the src attribute to the urls that's stored at the currentIndex in the array
	$('#image-to-vote-on').attr('src', images[currentIndex].src);

	// Display the amount of likes for the current image.
	$('#votes').html("Likes: " + images[currentIndex].votes);

	$('#caption').html(images[currentIndex].caption);
}
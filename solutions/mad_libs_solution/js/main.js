$('form').on('submit', function (e) {

	e.preventDefault();

	var author = $('#authorSelect').val();
	var noun = $('#nounInput').val();
	var verb = $('#verbInput').val();


	validateForm(author, noun, verb);

	$('.quote').hide();

	if (author !== null && noun.length !== 0 && verb.length !== 0) {

		displayMadLib(author, noun, verb);

	}

});


function validateForm (author, noun, verb) {
	if (author === null) {
		$('#authorSelect').addClass('error');
	} else {
		$('#authorSelect').removeClass('error');
	}

	if (noun.length === 0) {
		$('#nounInput').addClass('error');
	} else {
		$('#nounInput').removeClass('error');
	}

	if (verb.length === 0) {
		$('#verbInput').addClass('error');
	} else {
		$('#verbInput').removeClass('error');
	}
}

function displayMadLib (author, noun, verb) {	
	$('#' + author).fadeIn(300);

	$('.noun').text(noun);

	$('.verb').text(verb);
}


// Change color theme

$('#yellow').on('click', function () {
	changeTheme('yellow');
});

$('#blue').on('click', function () {
	changeTheme('blue');
});

$('#black').on('click', function () {
	changeTheme('black');
});

function changeTheme (className) {
	// TODO: Look up difference between .addClass and .attr methods
	// http://stackoverflow.com/questions/9090991/benefits-of-using-attr-over-addclass-in-jquery
	$('body').attr('class', className);
}
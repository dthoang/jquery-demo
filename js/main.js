/* your code goes here! */

/* Use clever selections and event handlers to assign the described interactivity */

$('#change-content').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).text(content);
});

$('#add-at-end').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).append(' ' + content);
});

$('#add-at-start').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).prepend(content + ' ');
});

$('#insert-before').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).before(content + ' ' + '<p>');
});

$('#move-after').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).insertAfter('#' + content);
});

$('#surround-class').on('click', function(){
	var selector = $('#selector').val();
	var content = $('#newContent').val();
	$('#' + selector).wrap('<div> class=' + content + '</div>');
});
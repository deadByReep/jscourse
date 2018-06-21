$(document).ready(function() {
	$('#sheldure').on('click', function() {
		$('.modal').css('display', 'block');
		$('.modal').fadeToggle('slow');
		/*$('.modal').animate(
		{
			//display = 'block',
			opacity = 'toggle'
		}, 3000);*/

	});
});
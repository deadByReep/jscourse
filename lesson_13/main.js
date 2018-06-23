$(document).ready(function() {
	$('#sheldure').on('click', function() {
		$('.overlay').animate(
		{
			opacity: 'toggle',
			display: 'toggle'
		},3000);
		$('.modal').animate(
	{
		display:'block',
		position: 'absolute'
	},3000);
		/*$('.modal').animate(
		{
			//display = 'block',
			opacity = 'toggle'
		}, 3000);*/

	});
});
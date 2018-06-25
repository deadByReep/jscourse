$(document).ready(function() {
	var modal = $('.modal'),
		overlay = $('.overlay'),
		btnOne = $('a[href="#sheldure"]'),
		btnTwo = $('a[href="#tour"]'),
		btnThree = $('.main_btn:first'),
		btnClose = $('.close');

	btnOne.on('click', function() {
		overlay.animate(
		{
			opacity: 'toggle'
		},2000);

		modal.animate(
		{
			height:'toggle'
		},2000);
	});

	btnTwo.on('click', function() {
		overlay.animate(
		{
			opacity: 'toggle'
		},1000);

		modal.animate(
		{
			height:'toggle'
		},2000);

	});

	btnThree.on('click', function() {
		overlay.animate(
		{
			opacity: 'toggle'
		},1000);

		modal.animate(
		{
			height:'toggle'
		},2000);

	});
	btnClose.on('click', function() {

		overlay.animate(
		{
			opacity:'toggle'
		},2000);

		modal.animate(
		{
			height:'toggle'
		},2000);
	})
});
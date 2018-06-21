window.addEventListener('DOMContentLoaded', function() {

	let tab = require('../parts/tab.js');
	let calc = require('../parts/calc.js');
	let ajax = require('../parts/ajax.js');
	let slider = require('../parts/slider.js');
	let modal = require('../parts/modal.js');
	let timer = require('../parts/timer.js');
	let scroll = require('../parts/scroll.js');

	tab();
	modal();
	ajax();
	slider();
	calc();
	timer();
	scroll();
});

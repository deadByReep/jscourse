var btn = document.getElementsByTagName('button')[0],
	btn2 = document.getElementsByTagName('button')[1];


btn.addEventListener ('click', () => {
	var elem = document.getElementById('myAnimation');
	var pos = 0;
	var id = setInterval(frame, 10);
	function frame () {
		if (pos == 350) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
});

btn2.addEventListener ('click', () => {
	var elem = document.getElementById('myAnimation');
	var pos = 350;
	var id = setInterval(frame, 10);
	function frame () {
		if (pos == 0) {
			clearInterval(id);
		} else {
			pos--;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
});

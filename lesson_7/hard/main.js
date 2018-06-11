var btn = document.getElementsByTagName('button')[0];
var elem = document.getElementById('myAnimation');


btn.onclick = function() {
	animate(function(timePassed) {
		elem.style.left = timePassed / 5 + 'px'; 
	}, 1760);
};

	function animate (draw, duration) {
	var start = performance.now();
		
		requestAnimationFrame(function animate (time) {
		var timePassed = time - start;
		if(timePassed > duration) timePassed = duration;
		draw(timePassed);
		if(timePassed < duration) {
			requestAnimationFrame(animate);
		}
	});
}
	
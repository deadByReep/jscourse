function timer() {
	let deadline = "2018-06-19";

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( t/(1000*60*60));

			return {
				"total" : t,
				"hours" : hours,
				"minutes" : minutes,
				"seconds" : seconds
			}; 
		};
	function setClock(id, endtime) {
		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds");
		let timeInterval = setInterval(updateClock, 1000);
			function updateClock() {
				let t = getTimeRemaining(endtime);
				hours.innerHTML = t.hours;
				if(t.hours < 10 && t.hours >= 0) {
					hours.innerHTML = `0${t.hours}`;
				};
				minutes.innerHTML = t.minutes;
				if (t.minutes < 10 && t.minutes >= 0) {
					minutes.innerHTML = `0${t.minutes}`;
				};
				seconds.innerHTML = t.seconds;
				if (t.seconds < 10 && t.seconds >= 0) {
					seconds.innerHTML = `0${t.seconds}`;
				};

				if(t.total <= 10800000) {
					clearInterval(timeInterval);
					hours.innerHTML = "00";
					minutes.innerHTML = "00";
					seconds.innerHTML = "00";
				return hours, minutes, seconds;	
				}
			};
			updateClock();
	};
	setClock("timer", deadline);
}

module.exports = timer;
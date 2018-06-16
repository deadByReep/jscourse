window.addEventListener('DOMContentLoaded', function() {

	var tab = document.getElementsByClassName('info-header-tab'),
		tabContent = document.getElementsByClassName('info-tabcontent'),
		info = document.getElementsByClassName('info-header')[0];

	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');
			tabContent[i].classList.add('hide');
		}
	}

	hideTabContent(1)

	function showTabContent(b) {
		if( tabContent[b].classList.contains('hide')) {
			hideTabContent(0);
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;
		if(target.className == 'info-header-tab') {
			for(let i = 0; i < tab.length; i++) {
				if ( target == tab[i]) {
					showTabContent(i);
					break;
				}
			}
		};
	});

	//Timer

	var deadline = "2018-06-17";

	function getTimeRemaining(endtime) {
		var t = Date.parse(endtime) - Date.parse(new Date()),
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
		var timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds");
		var timeInterval = setInterval(updateClock, 1000);
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

	//Modal
	var more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		btnZero = document.getElementsByClassName('description-btn')[0],
		btnOne = document.getElementsByClassName('description-btn')[1],
		btnTwo = document.getElementsByClassName('description-btn')[2],
		btnThree = document.getElementsByClassName('description-btn')[3];


	btnZero.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});		

	btnOne.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	

	btnTwo.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	

	btnThree.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});	

	more.addEventListener('click', function() {
		this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	});
	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';

	});
});

//Scroll

var links = document.querySelectorAll('[href^="#"]'),
    V = 1;
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) { 
        e.preventDefault();
        var w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash
            }
        }
    }, false);
} 


(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../parts/ajax.js":2,"../parts/calc.js":3,"../parts/modal.js":4,"../parts/scroll.js":5,"../parts/slider.js":6,"../parts/tab.js":7,"../parts/timer.js":8}],2:[function(require,module,exports){
function ajax() {
	let message = new Object();
	message.loading = "Загрузка...";
	message.success = "Спасибо! Скоро с вами свяжемся";
	message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0];
		input = form.getElementsByTagName('input');
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		form.addEventListener('submit', function(event) {
			event.preventDefault();
			form.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++) {
				input[i].value = "";
				//Очищаем поля ввода
			}
		});
	//Form 2
	let formTwo = document.getElementsByClassName('contact-form')[0];
		input = formTwo.getElementsByTagName('input');
		statusMessage = document.createElement('div');
		statusMessage.classList.add('status');

		formTwo.addEventListener('submit', function(event) {
			event.preventDefault();
			formTwo.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", 'server.php')

			request.setRequestHeader('Content-Type', "application/x-www-form-urlencoded");

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function() {
				if (request.readyState < 4) {
					statusMessage.innerHTML = message.loading;
				} else if (request.readyState === 4) {
					if(request.status == 200 && request.status < 300) {
						statusMessage.innerHTML = message.success;
						//Добавляем контент на страницу
					} else {
						statusMessage.innerHTML = message.failure;
					}
				}
			}
			for(let i = 0; i < input.length; i++) {
				input[i].value = "";
				//Очищаем поля ввода
			}
		});
}

module.exports = ajax;
},{}],3:[function(require,module,exports){
function calc() {
	let persons = document.getElementsByClassName('counter-block-input')[0],
			restDays = document.getElementsByClassName('counter-block-input')[1],
			place = document.getElementById('select'),
			totalValue = document.getElementById('total'),
			personsSum = 0,
			daysSum = 0,
			total = 0;

			totalValue.innerHTML = 0;

			persons.addEventListener('change', function() {
				personsSum = +this.value;
				total  = (daysSum * personsSum)*1000;
				if (restDays.value === '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			restDays.addEventListener('change', function() {
				daysSum = +this.value;
				total  = (daysSum * personsSum)*1000;
				if (persons.value === '') {
					totalValue.innerHTML = 0;
				} else {
					totalValue.innerHTML = total;
				}
			});

			place.addEventListener('change', function() {
				if (restDays.value === '' || persons.value === '') {
					totalValue.innerHTML = 0;
				} else { 
					totalValue.innerHTML = total * this.options[this.selectedIndex].value;;
				}
			});

}

module.exports = calc;
},{}],4:[function(require,module,exports){
	function modal() {
	let more = document.querySelector('.more'),
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close'),
		btnZero = document.getElementsByClassName('description-btn')[0],
		btnOne = document.getElementsByClassName('description-btn')[1],
		btnTwo = document.getElementsByClassName('description-btn')[2],
		btnThree = document.getElementsByClassName('description-btn')[3];

		
	btnZero.addEventListener('click', function() {
		let modalOne = () => {
			this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}	
		modalOne();
		});

	btnOne.addEventListener('click', function() {
		let modalTwo = () => {
			this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		}
		modalTwo();
	});	

	btnTwo.addEventListener('click', function() {
		let modalThree = () => {
			this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		}
		modalThree();
	});	

	btnThree.addEventListener('click', function() {
		let modalFour = () => {
			this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		}
		modalFour();
	});	

	more.addEventListener('click', function() {
		let moreModal = () => {
			this.classList.add('more-splash');
		overlay.style.display = 'block';
		document.body.style.overflow = 'hidden';
		}
		moreModal();
	});
	close.addEventListener('click', function() {
		let closeModal = () => {
			overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';

		}
		closeModal();
	});
}

module.exports = modal;	
},{}],5:[function(require,module,exports){
function scroll() {
	let links = document.querySelectorAll('[href^="#"]'),
    V = 1;
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(e) { 
        e.preventDefault();
        let w = window.pageYOffset,
            hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            let progress = time - start,
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
}

module.exports = scroll;
},{}],6:[function(require,module,exports){
function slider() {
	let slideIndex = 1;
		slides = document.getElementsByClassName('slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.getElementsByClassName('dot');

		showSlides(slideIndex);

		function showSlides(n) {

			if(n > slides.length) {
				slideIndex = 1;
			};
			if(n < 1) {
				slideIndex = slides.length;
			};

			for( let i = 0; i < slides.length; i++) {
				slides[i].style.display = 'none';
			};

			for( let i = 0; i < dots.length; i++) {
				dots[i].classList.remove('dot-active');
			};

			slides[slideIndex - 1].style.display = 'block';
			dots[slideIndex - 1].classList.add('dot-active');
		}

		function plusSlides (n) {
			showSlides(slideIndex += n)
		}

		function currentSlide(n) {
			showSlides(slideIndex = n)
		}

		prev.addEventListener('click', function() {
			plusSlides(-1);
		});	

		next.addEventListener('click', function() {
			plusSlides(1);
		});

		dotsWrap.addEventListener('click', function(event) {
			for ( let i = 0; i < dots.length + 1; i++) {
				if(event.target.classList.contains('dot') && event.target == dots[i-1]) {
					currentSlide(i);
				}
			}
		});
}

module.exports = slider;
},{}],7:[function(require,module,exports){
function tab() {
	let tab = document.getElementsByClassName('info-header-tab'),
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
}

module.exports = tab;
},{}],8:[function(require,module,exports){
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
},{}]},{},[1]);

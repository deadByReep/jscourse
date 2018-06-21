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
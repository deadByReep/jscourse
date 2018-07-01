window.addEventListener('DOMContentLoaded', function() {

let headerModalBtn = document.getElementsByClassName("header_btn")[0],
	closeModalBtn = document.getElementById("close_modal"),
	modalWindow = document.querySelector('.popup_engineer'),
	modalPopup = document.querySelector('.popup'),
	footerModalBtn = document.getElementById('footer_btn'),
	overlay = document.getElementsByClassName('overlay')[0];



headerModalBtn.addEventListener('click', function() {
		let modal = () => {
		modalWindow.style.display = 'flex';
		overlay.style.display = 'flex';
		document.body.style.overflow = 'visible';
	}	
		modal();
		});

footerModalBtn.addEventListener('click', function() {
		let modal = () => {
		overlay.style.display = 'block';
		modalPopup.style.display = 'flex';
		document.body.style.overflow = 'visible';
	}		
		modal();
		});

closeModalBtn.addEventListener('click', function() {
		let modalClose = () => {
		modalWindow.style.display = 'none';
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}	
		modalClose();
		});
closeModalBtn.addEventListener('click', function() {
		let modalClose = () => {
		modalPopup.style.display = 'none';
		overlay.style.display = 'none';
		document.body.style.overflow = '';
	}	
		modalClose();
		});
overlay.addEventListener('click', function() {
	let modalClose = () => {
		modalWindow.style.display = 'none';
		document.body.style.overflow = '';
		overlay.style.display = 'none';
	}	
	modalClose();
	});
});

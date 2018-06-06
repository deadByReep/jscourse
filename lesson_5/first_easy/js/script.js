let menuElement = document.querySelectorAll('.menu-item'),
	menu = document.querySelector('.menu'),
	title = document.getElementById('title');
	column = document.getElementsByClassName('column'),
	adv = document.querySelector('.adv'),
	promptOne = document.getElementById('prompt'),
	question = prompt("Как вы относитесь к технике Apple?" );

document.body.style.background = 'url(img/apple_true.jpg)';//поменяли фон
menu.insertBefore(menuElement[2], menuElement[1]);// сортировка элементов
title.innerHTML = "Мы продаем только подлинную технику Apple";// + подлинную

adv.remove();

 let newMenuItem = document.createElement('li');
newMenuItem.textContent = 'Пятый пункт'
newMenuItem.classList.add('menu-item');
menu.appendChild(newMenuItem); 
promptOne.innerHTML ="Вы относитесь к технике Apple: " + question;


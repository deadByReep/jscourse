var open = document.getElementById('open-btn'),
	mainInfo = document.getElementsByClassName('main-info'),
	goodsItems = document.getElementsByClassName('goods-item'),
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudget = document.querySelector('.count-budget-value'),
	employersName = document.querySelectorAll('.hire-employers-item'),
	openBtn = document.getElementsByTagName('button')[0],
	goodsItemBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],
	name = document.getElementsByClassName[0],
	nameValue = document.getElementsByClassName[1],
	budget = document.getElementsByClassName[2],
	budgetValue = document.getElementsByClassName[3],
	goods = document.getElementsByClassName[4],
	goodsValue = document.getElementsByClassName[5],
	items = document.getElementsByClassName[6],
	itemsValue = document.getElementsByClassName[7],
	employers = document.getElementsByClassName[8],
	employersValue = document.getElementsByClassName[9],
	discount = document.getElementsByClassName[10],
	discountValue = document.getElementsByClassName[11],
	isopen = document.getElementsByClassName[12],
	isopenValue = document.getElementsByClassName[13],
	price = 1000;


var budgetMonth,
	yourNameShop;



openBtn.addEventListener('click', () => {
	budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число", "");

	while (isNaN(budgetMonth) || budgetMonth == '' || budgetMonth == null) {
		budgetMonth;
	}
	budgetValue.textContent = budgetMonth

	nameValue.textContent = prompt("Название вашего магазина?","Ваше название" ,"").toUpperCase();
});	

openBtn.addEventListener('click', () => {
    let isDiscount = confirm('У вас есть скидка?');
    if (isDiscount) {
        price *= 0.8;
        discountValue.textContent = 'Скидка: 20% ';
        discountValue.style.backgroundColor = 'green'
    } else {
        discountValue.textContent = '';
        discountValue.style.backgroundColor = 'red'
    }
});
	if(goodsItems === '') {
 		goodsItemsBtn.disabled = disbled;
 			} else {
goodsItemBtn.addEventListener('click', () => {
	for (let i = 0; i < goodsItems.length; i++) {
 		let product = goodsItems[i].value;


 			if ((typeof(product)) === 'string' && (typeof(product)) != null &&  product.length < 50) {
 				console.log('Все верно');
 				mainList.shopGoods[i] = product;
 				goodsValue.textContent = mainList.shopGoods;
 			} else {
				i = i -1;
 			}
 		 }
	})
}


chooseItem.addEventListener('change', () => {
	let items = chooseItem.value;

		if (isNaN(items) || items != '') {
			mainList.shopItems = items.split(",");
			mainList.shopItems.sort();

			itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener('change', () => {
	let time = timeValue.value;

	if(time < 0) {
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if(time > 8 && time < 20) {
		console.log('Время работать!');
		mainList.open = true;
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
		mainList.open = false;
	} else {
		console.log('В сутках только 24 часа!');
		mainList.open = false;
	}

	if(mainList.open == true) {
		isopenValue.style.backgroundColor = 'green';
	} else {
		isopenValue.style.backgroundColor = 'red';
	}
});

countBudgetBtn.addEventListener('click', () => {
	countBudget.value = budgetMonth / 30;
});

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < employersName.length; i++) {
	let nameEmployers = employersName[i].value;
	mainList.employers[i] = nameEmployers;

		employersValue.textContent += mainList.employers[i] + ', ';
	}		
});


var mainList = {
	budget: budgetMonth,
	shopName: yourNameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount:false,
	shopItems:[]
}
		
console.log(mainList);
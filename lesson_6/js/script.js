var open = document.getElementById('open-btn'),
	mainInfo = document.getElementsByClassName('main-info')[0],
	goodsItems = document.getElementsByClassName('goods-item'),
	btn = document.getElementsByTagName('button'),
	chooseItem = document.querySelector('.choose-item'),
	timeValue = document.querySelector('.time-value'),
	countBudget = document.querySelector('.count-budget-value'),
	employersName = document.querySelectorAll('.hire-employers-item'),
	openBtn = document.getElementsByTagName('button')[0],
	goodsItemBtn = document.getElementsByTagName('button')[1],
	countBudgetBtn = document.getElementsByTagName('button')[2],
	employersBtn = document.getElementsByTagName('button')[3],
	name = document.getElementsByClassName('name')[0],
	nameValue = document.getElementsByClassName('name-value')[0],
	budget = document.getElementsByClassName('budget')[0],
	budgetValue = document.getElementsByClassName('budget-value')[0],
	goods = document.getElementsByClassName('goods')[0],
	goodsValue = document.getElementsByClassName('goods-value')[0],
	items = document.getElementsByClassName('items')[0],
	itemsValue = document.getElementsByClassName('items-value')[0],
	employers = document.getElementsByClassName('employers')[0],
	employersValue = document.getElementsByClassName('employers-value')[0],
	discount = document.getElementsByClassName('discount')[0],
	discountValue = document.getElementsByClassName('discount-value')[0],
	isopen = document.getElementsByClassName('isopen')[0],
	isopenValue = document.getElementsByClassName('isopen-value')[0],
	price = 1000;


var budgetMonth,
	yourNameShop;

countBudget.readOnly = 1;
goodsItemBtn.disabled = 1;
countBudgetBtn.disabled = 1;
employersBtn.disabled = 1;

openBtn.addEventListener('click', () => {
	budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число", "");

	while (isNaN(budgetMonth) || budgetMonth == '' || budgetMonth == null) {
		budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число", "");
	}
	budgetValue.textContent = budgetMonth;

	yourNameShop = prompt("Название вашего магазина?", "");
	while(yourNameShop == null || yourNameShop == '') {
		yourNameShop = prompt("Название вашего магазина?", "");
	}
	nameValue.textContent = yourNameShop.toUpperCase();
	countBudgetBtn.disabled = 0;
});

openBtn.addEventListener('click', () => {
    let isDiscount = confirm('Ввести дисконтную систему?');
    if (isDiscount) {
        price *= 0.8;
        discountValue.textContent = 'Скидка: 20% ';
        discountValue.style.backgroundColor = 'green'
    } else {
        discountValue.textContent = '';
        discountValue.style.backgroundColor = 'red'
    }
});
	for(let i = 0; i < goodsItems.length; i++){
		goodsItems[i].addEventListener('change', () =>{

if (goodsItems.value != '') {
	goodsItemBtn.disabled = 0;
	} else {
		goodsItemBtn.disabled = 1;
		}
	
	})

}	
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


for(let i = 0; i < employersName.length; i++){
		employersName[i].addEventListener('change', () =>{
if (employersName.value != '') {
	employersBtn.disabled = 0;
	} else {
		employersBtn.disabled = 1;
		}
	
	})

}	

employersBtn.addEventListener('click', () => {
	for (let i = 0; i < employersName.length; i++) {
	let nameEmployers = employersName[i].value;
	mainList.employers[i] = nameEmployers;

		employersValue.textContent += mainList.employers[i] + ', ';
	}
	employersBtn.disabled = 1;		
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
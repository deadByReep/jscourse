var budgetMonth = prompt("Введите свой бюджет на месяц: "),
	yourNameShop = prompt("Название вашего магазина?","Ваше название"),
	price = 100;
	

var mainList = {
	budget: budgetMonth,
	shopName: yourNameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount:true
};

/*var i = 0;
while(i < 5) {
	console.log(i);
	i++;
	var product = prompt("Какой тип товаров будем продавать?");
 		mainList.shopGoods[i] = product;
 	if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 		console.log('Все верно');
 	} else {
 	  i--;
 	}
}; */

 	//Первый способ	 !!

 	/*var i = 0;
 	do {
		console.log(i);
		i++;
		var product = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods[i] = product;
		if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 		console.log('Все верно');
 	} else {
 		--i;
 	}
 	} while(i < 5);
 	*/
 	// Второй способ !!
 	


 for (let i = 0; i < 5; i++) {
 	let product = prompt("Какой тип товаров будем продавать?");
 	if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 		console.log('Все верно');
 		mainList.shopGoods[i] = product;
 	} else {
		--i;
 	}
 }
function giveNameEmpoloyers() {
	for (let i = 0; i < 4; i++) {
		let nameEmployers = prompt("Имя вашего сотрудника");
		if((typeof(nameEmployers)) === 'string' && (typeof(nameEmployers)) != null && nameEmployers != '' && nameEmployers.length < 50) {
			console.log("Замечательные имена")
			mainList.employers[i] = nameEmployers;
		} else {
			--i;
		}
	}
}


function askDiscount(number) {
	if (mainList.discount === true) {
		var newPrice = price/100 * 20;
		price = price - newPrice;
		console.log(price);
	} else {
		console.log('У вас нет скидки');
	}
}


console.log(mainList);
function checkDayBudget(){
alert("Ваш бюджет на 1 день : " + mainList.budget / 30);
}

giveNameEmpoloyers();
checkDayBudget();
askDiscount();
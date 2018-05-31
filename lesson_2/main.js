var budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число"),
	yourNameShop = prompt("Название вашего магазина?","Ваше название");

var mainList = {
	budget: budgetMonth,
	shopName: yourNameShop,
	shopGoods: [],
	employers: {},
	open: false
};

/*var i = 0;
while(i < 5) {
	console.log(i);
	i++;
	var product = prompt("Какой тип товаров будем продавать?");
 		mainList.shopGoods[i] = product;
 	
}; 

if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 		console.log('Все верно');
 	} else {
 		--i;
 	}*/
 	//Первый способ	 !!

 	/*var i = 0;
 	do {
		console.log(i);
		i++;
		var product = prompt("Какой тип товаров будем продавать?");
		mainList.shopGoods[i] = product;
 	} while(i < 5);
if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 		console.log('Все верно');
 	} else {
 		--i;
 	}*/
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


console.log(mainList);
alert("Ваш бюджет на 1 день : " + mainList.budget / 30);
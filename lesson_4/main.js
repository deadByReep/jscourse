var budgetMonth,
	yourNameShop,
	price;

function start() {
	budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число", "");

	while (isNaN(budgetMonth) || budgetMonth == '' || budgetMonth == null) {
		budgetMonth;
	}

	yourNameShop = prompt("Название вашего магазина?","Ваше название" ,"").toUpperCase();
}	


var mainList = {
	budget: budgetMonth,
	shopName: yourNameShop,
	shopGoods: [],
	employers: {},
	open: false,
	discount:false,
	shopItems:[],
	chooseGoods:function chooseGoods() {
 	 for (let i = 0; i < 5; i++) {
 	let product = prompt("Какой тип товаров будем продавать?", "");

 			if ((typeof(product)) === 'string' && (typeof(product)) != null && product != '' && product.length < 50) {
 				console.log('Все верно');
 				mainList.shopGoods[i] = product;
 			} else {
				i = i -1;
 			}
 		 }
 	},

 	giveNameEmpoloyers:function giveNameEmpoloyers() {
	 for (let i = 0; i < 4; i++) {
	let nameEmployers = prompt("Имя вашего сотрудника", "");

			if((typeof(nameEmployers)) === 'string' && (typeof(nameEmployers)) != null && nameEmployers != '' && nameEmployers.length < 50) {
				console.log("Замечательные имена")
				mainList.employers[i] = nameEmployers;
			} else {
				i = i - 1;
			}
		 }
	},
	askDiscount:function askDiscount(number) {
	 if (mainList.discount === true) {
		var newPrice = price/100 * 20;
			price = price - newPrice;
			console.log(price);
		} else {
		console.log('У вас нет скидки');
		}
	 },
	checkDayBudget:function checkDayBudget(){
		alert("Ваш бюджет на 1 день : " + mainList.budget / 30);
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую товары", "");
		if (items === '' || items === null || /\d/.test(items) === true) {
				alert("Вы что то сделали не так");
				chooseShopItems();
			} else {
				console.log("Все хорошо");
			}
			mainList.shopItems = items.split(",");
			pushElement();
				function pushElement() {
				 let element = prompt("Подождите, еще", "");
					if (element === '' || element === null || /\d/.test(element) === true){
						alert("Вы что то сделали не так");
						pushElement();
				}
			mainList.shopItems.push(element);
			}
			mainList.shopItems.sort();
			mainList.shopItems.unshift( );
			mainList.shopItems.forEach(function(item,i){
				alert(i + 1 + ": " + 'У нас вы можете приобрести: "' + item + '"' );
			})
	for(let key in mainList) {
		console.log("Наш магазин включает в себя " + key + mainList[key])
	}
	}
 }

console.log(mainList);

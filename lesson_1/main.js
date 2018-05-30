var budgetMonth = prompt("Ваш бюджет за месяц?", "Введите число"),
	yourNameShop = prompt("Название вашего магазина?","Ваше название"),
	productOne = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики"),
	productTwo = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики"),
	productThree = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики");

var mainList = {
	budget: budgetMonth,
	shopName: yourNameShop,
	shopGoods: [productOne, productTwo, productThree],
	employers: {
		
	},
	open: false
};

console.log(mainList);
alert("Ваш бюджет на 1 день : " + budgetMonth / 30);
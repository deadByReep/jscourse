var modalOne = prompt("Ваш бюджет за месяц?", "Введите число"),
	modalTwo = prompt("Название вашего магазина?","Ваше название"),
	productOne = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики"),
	productTwo = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики"),
	productThree = prompt("Какой тип товаров будем продавать?", "яблочки там, апельсинчики");
var mainList = {
	budget: modalOne,
	shopName: modalTwo,
	shopGoods: [productOne, productTwo, productThree],
	employers: {
		
	},
	open: false
};
console.log(mainList);
document.write("Ваш бюджет на 1 день : ",modalOne / 30);